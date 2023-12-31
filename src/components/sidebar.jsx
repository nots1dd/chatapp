import React from "react";
import Chats from "./chats";
import Navbar from "./navbar";
import Search from "./search";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    )
}

export default Sidebar;