import React from 'react';
import Crypto from '../components/Crypto';
import News from '../components/News';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Button, Center, Heading } from '@chakra-ui/react';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Cryptocurrency tracker</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Center m={5}>
        <Heading fontFamily="Stalinist One" fontWeight="500" fontSize='2xl'>
          Cryptocurrency
        </Heading>
      </Center>

      <Button
        colorScheme="twitter"
        color="white"
        position="fixed"
        zIndex="999"
        bottom="0"
        right="0"
        m={3}
        onClick={() => window.location.reload()}>
        Refresh
      </Button>

      <Tabs variant="enclosed">
        <Center>
          <TabList>
            <Tab>Crypto</Tab>
            <Tab>News</Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <Crypto />
          </TabPanel>
          <TabPanel>
            <News />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Home;
