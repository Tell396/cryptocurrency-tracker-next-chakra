import * as React from 'react';
import Axios from 'axios';
import { Input, Button, Box } from '@chakra-ui/react'

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

export default function Crypto() {
    // Crypto API
    const [search, setSearch] = React.useState('');
    const [crypto, setCrypto] = React.useState([]);

    React.useEffect(() => {
        Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=88&currency=USD`).then(
            (res) => {
                setCrypto(res.data.coins);
            },
        );
    }, []);

    return (
        <>
            <Box>
                <Input
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Box>

            <TableContainer>
                <Box>
                    <Table variant='unstyled'>
                        <Thead>
                            <Tr>
                                <Th>Rank</Th>
                                <Th>Name / Ticker</Th>
                                <Th>Price</Th>
                                <Th>Changes</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {crypto
                                .filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
                                .map((val, id) => {
                                    return (
                                        <Tr key={id} id={id}>
                                            <Td>{val.rank}</Td>
                                            <Td>
                                                <div>
                                                    <a href={val.websiteUrl}>
                                                        <img src={val.icon} alt="logo" width="40px" />
                                                    </a>
                                                    <p>
                                                        {val.symbol} | {val.name}
                                                    </p>
                                                </div>
                                            </Td>
                                            <Td isNumeric>${val.price.toFixed(2)}</Td>
                                            <Td>
                                                <div>
                                                    <p>
                                                        <span>1 week: </span>
                                                        {val.priceChange1w}
                                                    </p>
                                                    <p>
                                                        <span>1 day: </span>
                                                        {val.priceChange1d}
                                                    </p>
                                                    <span>1 hour: </span>
                                                    {val.priceChange1h}
                                                </div>
                                            </Td>
                                            <Td>
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
                                            </Td>
                                        </Tr>
                                    )
                                })}
                        </Tbody>
                    </Table>
                </Box>
            </TableContainer>
        </>
    );
}