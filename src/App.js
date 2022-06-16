import { Box, Text } from '@chakra-ui/react'
import Header from './components/Header';
import PostsList from './components/PostsList';

function App() {

  return (
    <Box>
      <Header />
      <Box>
        <Text  mt={6} textAlign="center" fontSize="5xl" fontWeight="bold">All Posts</Text>
          <PostsList/>
      </Box>
    </Box>
  );
}

export default App;
