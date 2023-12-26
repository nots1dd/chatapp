import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const currentUser = useContext(AuthContext)

    const handleSearch = async ()=>{
        const q = query(collection(db, "users"),where("displayName",'==',username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (err) {
            setErr(true);
        }


    };

    const handleKey = (e)=>{
        e.code === "Enter" && handleSearch();

    const handleSelect = async () => {
        //checking for existing chat else creating
        const combinedID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
        try {
            const res = await getDoc(doc(db,"chats", combinedID))
            
            if (!res.exists()) {
                //create chat
                await setDoc(doc(db, "chats", combinedID), {messages:[]});

                //create user chat
                await updateDoc(doc(db,"userChats",currentUser.uid), {
                    [combinedID+'.userInfo']: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedID+'.date']: serverTimestamp()
                });
                await updateDoc(doc(db,"userChats",user.uid), {
                    [combinedID+'.userInfo']: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedID+'.date']: serverTimestamp()
                });
                
            }
        } catch (err) {}

        setUser(null)
        setUsername("")
    }
    
    }
    return(
        <div className="search">
            <div className="searchForm">
                <input className="input" type="text" placeholder="Find a user" onKeyDown={handleKey} value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            {err && <span>User not found</span>}
            {user && <div className="userChat">
                <img className="img" src={user.photoURL} alt="" />
                <div className="userChatinfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search;