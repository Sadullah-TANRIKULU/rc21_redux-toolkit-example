import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import loadingGif from "../assets/loading.gif";
import axios from "axios";
import { useState, useEffect } from "react";


const News = () => {
  const API_KEY = process.env.REACT_APP_NEWS_KEY;
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;

  useEffect(() => {
    
    const getData = async () => {
      try {
        const response = await axios.get(url);
        // console.log(response.data.articles);
        setNewsData(response.data.articles);
      } catch (error) {
        console.log(error.status);
      }
    };

    getData();
  }, []);

console.log(newsData);
  return (
    <>
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {newsData.map((item, index) => (
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
            <CardMedia
              component="img"
              height="250"
              image={item?.urlToImage}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" href={item?.url} target="_blank">
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default News;
