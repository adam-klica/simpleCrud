import { Box } from "@chakra-ui/react";
import { Grid, GridItem, Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Bars } from 'react-loader-spinner'
import '../App.css'

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/posts',
            );
            setPosts(result.data);
            setTimeout(function () { setIsLoading(false) }, 1000);
        }
        fetchData()
    }, []);

    return (
        <Box pb={10}>
            {isLoading ? <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" mt={156}>
                <Text fontSize={40} fontWeight={200} mb={3} mr={3}>Loading...</Text>
                <Bars heigth="100" width="100" color="grey" ariaLabel="loading-indicator" />
            </Box> :
                <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={10} pl={35} pr={35}>
                    {posts && posts.map(post => {
                        return (
                            <GridItem position="relative" w='100%' h="96" bg='gray.300' borderRadius={16} p={5} className="card" key={post.id}>
                                <Box >
                                    <Text textDecoration="underline">Post ID: {post.id}</Text>
                                    <Text fontSize={20} fontWeight={800} textTransform="capitalize" mt={2}>{post.title}</Text>
                                    <Box bg="gray.200" pt={1} pb={1} pl={3} pr={3} mt={3} borderRadius={10}>
                                        <Text mt={2}>{post.body}</Text>
                                    </Box>
                                    <Box position="absolute" bottom="4">
                                        <Link to={`/post/${post.id}`} style={{ marginRight: 20 }}><Button>Edit post</Button></Link>
                                    </Box>
                                </Box>
                            </GridItem>
                        )
                    })}
                </Grid>}

        </Box>
    )
}

export default PostsList