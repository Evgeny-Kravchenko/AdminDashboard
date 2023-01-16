import React, { ReactElement } from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react';

import { BaseRouter } from 'src/pages';
import { theme } from 'src/shared/theme';

function App(): ReactElement {
  return (
    <ChakraBaseProvider theme={theme}>
      <BaseRouter />
    </ChakraBaseProvider>
  );
}

export default App;
