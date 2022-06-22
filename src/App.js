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
  Input,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const PER_PAGE = 25;

  const [repos, setRepos] = useState([]);
  const [totalRepos, setTotalRepos] = useState(0);
  const [loading, setLoading] = useState(false);

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
            />

            <HStack spacing={8}>
              <Button>Prev</Button>
              <p>Count: {totalRepos} | Page: 1 </p>
              <Button>Next</Button>
            </HStack>

            <ReposTable repos={repos} loading={loading} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
