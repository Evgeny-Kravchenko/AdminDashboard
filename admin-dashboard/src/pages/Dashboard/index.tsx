import React, { ReactElement } from 'react';
import { Heading, Button, useColorMode } from '@chakra-ui/react';

export const Dashboard = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Heading as='h1' size='md' bg='greenAccent.400'>
      <Button onClick={toggleColorMode}>{colorMode}</Button>
    </Heading>
  );
};
