import { Box, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

import Header from './components/Header';
import PostsList from './components/PostsList';
function App() {
  
  return (
    <Box style={{backgroundColor: "#F1F1F1", height: "100vh"}}>
      <Header />
      <Box>
        <Text  mt={6} textAlign="center" fontSize="5xl" fontWeight="bold">All Posts</Text>
          <PostsList/>
      </Box>
    </Box>
  );
}

export default App;
