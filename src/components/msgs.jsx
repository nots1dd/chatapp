import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/UserContext";
import { db } from "../firebase";
import Message from "./message";

const Messages = () => {
    const [msgs,setMsgs] = useState([])
    const data = useContext(ChatContext);

    useEffect(()=>{
        const unSub = onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
            doc.exists() && setMsgs(doc.data().msgs)
        })

        return () => {
            unSub();
        }
    }, [data.chatId])
    return(
        <div className="msgs">
            {msgs.map((m)=>(
                <Message message={m} key={m.id}/>
            ))}
            <Message/>
        </div>
    )
}

export default Messages;