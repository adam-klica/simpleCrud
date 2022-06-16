import { Box, Text, FormControl, FormLabel, Input, Textarea, Center, Button } from '@chakra-ui/react'
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";


const Create = () => {


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)
    const [navigator, setNavigator] = useState(false)
    const formHandler = () => {
        setLoading(true)
        if (body === '' || title === '') {
            toast.error('Please fill all required fields.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(function () { setLoading(false) }, 3000);
            return
        }

        async function sendData() {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: title,
                body: body,
                userId: 1,
            })
                .then(function (response) {
                    console.log("re", response)
                    if (response.status === 201) {
                        toast.success('Post created!', {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setTitle("");
                        setBody("")
                        setTimeout(function () { setLoading(false) }, 500);
                        setTimeout(function () { setNavigator(true) }, 4000);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        sendData()
    }

    return (
        <Box >
            <Header />
            <Text textAlign="center" mt={6} fontSize="5xl" fontWeight="bold" pb={20}>Create new post</Text>
            <Box pl={20} pr={20}>
                <FormControl bg="gray.100" p={35}>
                    <FormLabel htmlFor='email'>Title</FormLabel>
                    <Input
                        placeholder='Enter your title here'
                        bg="white"
                        id='email'
                        type='email'
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <FormLabel mt={4} htmlFor='email'>Content</FormLabel>
                    <Textarea
                        placeholder='Enter your content here'
                        bg="white"
                        id='email'
                        rows={7}
                        type='email'
                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value)
                        }}
                    />
                    <Button colorScheme='teal' mt={5} isLoading={loading} onClick={formHandler}>Create</Button>
                </FormControl>
            </Box>
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
        </Box >
    )
}

export default Create;