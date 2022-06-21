import React from 'react';
import { ChakraProvider, Box, Grid, theme, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" pos="fixed" />
          <Text>Github Repos Search</Text>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
