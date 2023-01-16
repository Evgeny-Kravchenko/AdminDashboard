import React, { ReactElement } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { BaseRouter } from 'src/pages';
import { theme } from 'src/shared/theme';

function App(): ReactElement {
  return (
    <ChakraProvider theme={theme()}>
      <BaseRouter />
    </ChakraProvider>
  );
}

export default App;
