import React, { ReactElement } from 'react';
import { Heading, Button, useColorMode } from '@chakra-ui/react';

import { useThemeModeColors } from 'src/shared/theme/hooks';

export const Dashboard = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const greenAccent900 = useThemeModeColors('greenAccent.900');
  const redAccent200 = useThemeModeColors('redAccent.200');

  return (
    <>
      <Heading as='h1' bg={greenAccent900} size='4xl'>
        Change theme mode
      </Heading>
      <Button backgroundColor={redAccent200} onClick={toggleColorMode}>
        {colorMode}
      </Button>
    </>
  );
};
