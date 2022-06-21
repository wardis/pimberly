import React, { useState } from 'react';
import axios from 'axios';

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
  const [term, setTerm] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    fetchRepos();
  };

  const fetchRepos = async () => {
    setLoading(true);

    const url = 'https://api.github.com/search/repositories';
    await axios
      .get(url, {
        params: {
          sort: 'stars',
          per_page: 25,
          q: term,
        },
      })
      .then(res => {
        const { data } = res;
        if (data.items.length) setRepos(data.items);
      })
      .catch(err => console.log(err));

    setLoading(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" pos="fixed" />
          <VStack spacing={8} alignItems="center">
            <Heading>GitHub Repos</Heading>

            <HStack as="form" onSubmit={handleSubmit}>
              <Input
                placeholder="Search term..."
                onChange={e => setTerm(e.target.value)}
              />
              <Button
                type="submit"
                isLoading={loading}
                loadingText="Searching"
                variant="outline"
              >
                Search
              </Button>
            </HStack>

            {repos &&
              repos.map(repo => (
                <p key={repo.id}>
                  {repo.name} - {repo.stargazers_count}
                </p>
              ))}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
