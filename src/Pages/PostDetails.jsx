import { Box, Text, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";
import Header from "../components/Header"

const PostDetails = () => {
    const [post, setPost] = useState()
    const [navigator, setNavigator] = useState(false)
    const id = window.location.pathname.slice(6)

    const udpateHandler = async () => {
        if (post.title === "" || post.body === "") {
            toast.error('Please fill all required fields.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                id: post.id,
                title: post.title,
                body: post.body,
                userId: post.userId
            });
        if (res.status === 200) {
            toast.success('Post updated!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const deleteHandler = async () => {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (res.status === 200) {
            toast.success('Post deleted!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(function () { setNavigator(true) }, 4000);
        }
    }
    useEffect(() => {
        async function fetchData() {
            const result = await axios(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
            );
            setPost(result.data);
        }
        fetchData()
    }, []);
    return (
        <Box bg="gray.300" height="100vh">
            <Header />
            <Text pt={35} pb={35} textAlign="center" fontSize="5xl" fontWeight="bold">Edit post</Text>
            {post &&
                <Box pl={20} pr={20}>
                    <FormControl bg="white" borderRadius={15} p={35}>
                        <FormLabel htmlFor='email'>Title</FormLabel>
                        <Input
                            placeholder='Enter your title here'
                            variant="filled"
                            id='email'
                            type='email'
                            defaultValue={post.title}
                            onChange={(e) => setPost({ ...post, title: e.target.value })}
                        />
                        <FormLabel mt={4} htmlFor='email'>Content</FormLabel>
                        <Textarea
                            rows={7}
                            placeholder='Enter your content here'
                            variant="filled"
                            id='email'
                            type='email'
                            defaultValue={post.body}
                            onChange={(e) => { setPost({ ...post, body: e.target.value }) }}
                        />
                        <Box display="flex" flexDirection="row" pt={7}>
                            <Button colorScheme='green' mr={4} onClick={udpateHandler}>Update</Button>
                            <Button colorScheme='red' onClick={deleteHandler}>Delete</Button>
                        </Box>
                    </FormControl>
                </Box>
            }
            {navigator ? <Navigate to="/" replace={true} /> : <></>}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </Box>)
}

export default PostDetails