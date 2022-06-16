import { Box, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillFileAdd, AiOutlineHome, AiOutlineFileAdd } from 'react-icons/ai';
import { useState } from "react";


const Header = () => {
    const url = window.location.pathname
    return (
        <Box style={{ display: "flex", backgroundColor: "#435058", paddingTop: 15, paddingBottom: 15, justifyContent: "center", color: "white" }}>
            <Box style={{ display: "flex", flexDirection: "row" }}>
                {url === "/" ? <AiFillHome style={{ marginTop: 8, marginRight: 5 }} size={30} /> : <AiOutlineHome size={30} style={{ marginTop: 8, marginRight: 5 }}></AiOutlineHome>}
                <Link to="/" style={{ marginRight: 20 }}><Text fontSize={25}>Home</Text></Link>
            </Box>

            <Box style={{ display: "flex", flexDirection: "row" }}>
                {url === "/create" ? <AiFillFileAdd style={{ marginTop: 8, marginRight: 5 }} size={30} /> : <AiOutlineFileAdd size={30} style={{ marginTop: 8, marginRight: 5 }}></AiOutlineFileAdd>}
                <Link to="/create" style={{ marginRight: 20 }}><Text fontSize={25}>Create</Text></Link>
            </Box>
        </Box>
    )
}

export default Header;