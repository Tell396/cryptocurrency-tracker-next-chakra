import { useEffect } from 'react';
import * as React from 'react';
import Axios from 'axios';
import { Box } from '@chakra-ui/react'

export default function News() {
  const [search, setSearch] = React.useState('');
  const [news, setNews] = React.useState([]);

  useEffect(() => {
    Axios.get(`https://api.coinstats.app/public/v1/news?skip=0&limit=50`).then((res) => {
      setNews(res.data.news);
    });
  }, []);

  return (
    <>
      {news
        .filter(async (news) => {
          return news.source.includes(search);
        })
        .map((news) => {
          return (
            <Box key={''} boxShadow='base' mb={2.5} p={3} rounded={15} bg='white'>
              <div>
                <a href={news.link}>
                  <img src={news.imgURL} alt="logo" width="60px" />
                </a>
              </div>

              <div >{news.source}</div>
              <a href={news.shareURL}>
                {news.title}
              </a>
            </Box>
          );
        })}
    </>
  );
}
