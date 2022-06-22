import React, { useState } from 'react';
import { ReposTable } from './components/ReposTable';
import { SearchBar } from './components/SearchBar';

import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  VStack,
  Heading,
  HStack,
  Text,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const PER_PAGE = 25;

  const [repos, setRepos] = useState([]);
  const [totalRepos, setTotalRepos] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" pos="fixed" />
          <VStack spacing={8} alignItems="center">
            <Heading>GitHub Repos</Heading>

            <SearchBar
              perPage={PER_PAGE}
              setLoading={setLoading}
              setRepos={setRepos}
              setTotalRepos={setTotalRepos}
              currentPage={currentPage}
            />

            <HStack spacing={8}>
              <Button onClick={() => setCurrentPage(prev => prev - 1)}>
                Prev
              </Button>
              <Text>
                Count: {totalRepos} | Page: {currentPage}/
                {Math.ceil(totalRepos / PER_PAGE)}
              </Text>
              <Button onClick={() => setCurrentPage(prev => prev + 1)}>
                Next
              </Button>
            </HStack>

            <ReposTable repos={repos} loading={loading} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
