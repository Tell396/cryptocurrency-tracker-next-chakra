import React from 'react';
import Crypto from '../components/Crypto';
import News from '../components/News';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Home = () => {
  const [search, setSearch] = React.useState('');

  const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };

  return (
    <div className="App">
      <h1>Cryptocurrency</h1>
      <Button
        colorScheme="linkedin"
        onClick={() => window.location.reload()}
        sx={{ mb: '10px' }}
      >Refresh</Button>

      <Tabs variant='enclosed'>
        <TabList>
          <Tab>Crypto</Tab>
          <Tab>News</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Crypto />
          </TabPanel>
          <TabPanel>
            <News />
          </TabPanel>
        </TabPanels>
      </Tabs>

    </div>
  );
};

export default Home;
