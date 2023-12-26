import React, { useContext } from "react";
import { ChatContext } from "../context/UserContext";
import add from '../image/add.png';
import Cam from '../image/camera.png';
import more from '../image/more.png';
import Input from "./input";
import Messages from "./msgs";

const Chat = () => {
    const data = useContext(ChatContext);
    return(
        <div className="Chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <button className="chatIcons" id="button">
                        <img className="img" src={Cam} alt="" />
                    </button>
                    <button className="chatIcons" id="button">
                        <img className="img" src={add} alt="" />
                    </button>
                    <button className="chatIcons" id="button">
                        <img className="img" src={more} alt="" />
                    </button>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat;