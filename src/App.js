import React, { useState } from 'react';
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(term);
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
                placeholder="Search..."
                onChange={e => setTerm(e.target.value)}
              />
              <Button type="submit">Search</Button>
            </HStack>
            <p>{term}</p>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
