import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/UserContext";
import test1 from '../image/testIMG1.jpeg';

const Message = ({message}) => {
    const currentUser = useContext(AuthContext);
    const data = useContext(ChatContext);
    return(
        <div className="msg owner">
            <div className="msgInfo">
                <img className="img" src={test1} alt="" />
                <span>Just now</span>
            </div>
            <div className="msgContent">
                <p className="p">noob</p>
                <img className="img" src={test1} alt="" />
            </div>
        </div>
    )
}

export default Message;