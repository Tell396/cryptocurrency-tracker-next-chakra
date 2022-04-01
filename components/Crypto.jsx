import * as React from 'react';
import Axios from 'axios';
import { Input, Button, Box, Flex, Center, Spacer, Text, Divider } from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react';

export default function Crypto() {
    // Crypto API
    const [search, setSearch] = React.useState('');
    const [crypto, setCrypto] = React.useState([]);

    React.useEffect(() => {
        Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=88&currency=USD`).then(
            (res) => {
                setCrypto(res.data.coins);
                console.log(res.data.coins);
            },
        );
    }, []);

    return (
        <>
            <Box>
                <Input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            </Box>

            {crypto
                .filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
                .map((val, id) => {
                    return (
                        <Flex key={id} id={id} boxShadow="base" m={1} mb={3} p={3} rounded={15} bg="white">
                            <Center>
                                <Text p={2} mr={2.5} background="gray.100" rounded={5}>
                                    {val.rank}
                                </Text>
                                <Flex>
                                    <a href={val.websiteUrl}>
                                        <img src={val.icon} alt="logo" width="40px" />
                                    </a>
                                </Flex>
                                <div>
                                    <p>
                                        {val.name} {/* {val.symbol}  */}
                                    </p>
                                </div>
                            </Center>

                            <Spacer />

                            <Box>
                                <Center>
                                    <Text p={2} fontWeight="bold">
                                        ${val.price.toFixed(2)}
                                    </Text>
                                    <Box pr={5}>
                                        <p>{val.priceChange1w}</p>
                                        <Divider />
                                        <p>{val.priceChange1d}</p>
                                        <Divider />
                                        <p>{val.priceChange1h}</p>
                                    </Box>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button>...</Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader>Other information:</PopoverHeader>
                                            <Box p={2}>
                                                <p>Available Supply: {val.availableSupply}</p>
                                                <p>Total Supply: {val.totalSupply}</p>
                                            </Box>
                                        </PopoverContent>
                                    </Popover>
                                </Center>
                            </Box>
                        </Flex>
                    );
                })}
        </>
    );
}
