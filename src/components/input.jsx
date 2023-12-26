import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/UserContext";
import { db, storage } from "../firebase";
import addpic from '../image/addpic.png';
import attach from '../image/attach.png';

const Input = () => {
    const [text,setText] = useState("");
    const [img,setImg] = useState(null);
    const currentUser = useContext(AuthContext);
    const data = useContext(ChatContext);
    const handleSend = async ()=>{
        if (img) {

            const storageRef = ref(storage, uuid );
            const uploadTask = uploadBytesResumable(storageRef,img);


        } else {
            await updateDoc(doc(db,"chats",data.chatID),{
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderID: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }
    }
    return(
        <div className="input">
            <input className="input1" type="text" placeholder="Type something!" onChange={e=>setText(e.target.value)}/>
            <div className="send">
                <img className="img" src={attach} alt="" />
                <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])}/>
                <label htmlFor="file">
                    <img className="img" src={addpic} alt="" />
                </label>
                <button className="button" onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Input;