import Response from "../assets/res";
import DashboardLayout from "./dashboard";
import { useState,useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Text } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react";
import Rating from '@mui/material/Rating';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./maincontent.css";
import axios from "axios";


function VideoPlayer({showVideoo,setShowVideoo}){
  const [isPlaying,setIsPlaying] = useState(true)
    const handlePlay=()=>{
        setIsPlaying(true);
    }
    const handlePause=()=>{
        setIsPlaying(false);
    }

    function handleCross(){
      setShowVideoo(false)
    }
    return (
      <>
        <div 
        style={{
        position: "absolute",
        top: '10px',
        left:'50px',
        
        }}
        >
            <ReactPlayer 
            url='https://zee-demo.s3.ap-south-1.amazonaws.com/Mission_+Impossible+%E2%80%93+Dead+Reckoning+Part+One+_+Official+Trailer+(2023+Movie)+-+Tom+Cruise.mp4'
            playing={isPlaying}
            controls={true}
            onPause={handlePause}
            onPlay={handlePlay}
            width='88vw'
            height='88vh'
            borderRadius='50px'
            />
        </div>
        <CloseButton 
        style={{
          position: 'absolute',
          top:'10px',
          left:'50%',
          color:"red"
        }}
        onClick={handleCross}
        />
      </>
    )
}

function PopUp({trending}) {
    
  const [showVideo,setShowVideo]=useState(false);
  
  function handleClick(){
    console.log("button clicked");
    setShowVideo(!showVideo);
  }
  
  return (
    <>
    <div 
    className="carousel-cover"
    style={{
      visibility: showVideo? 'hidden' : 'visible'
    }}>

      <Carousel 
      className="carousel" 
      showThumbs={false} 
      showStatus={false} 
      showIndicators={false}
      autoPlay
      >
        {trending?.map((item) => {
          return (
            <>
                <img
                style={{
                width:'88vw',
                height:'88vh', // 88vw, 88vh
                borderRadius:'10px',
                opacity:"50%",
                }}
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                />

                <div className='imageText' >

                    <div className='imgTitle'>
                            {item?.title}
                    </div>

                    <div className='imgDesc' >
                            {item?.overview}
                    </div>

                    <Rating name="read-only" value={Math.floor(item?.vote_average/2)} readOnly />

                    <div className='Boxx'>
                       
                            <Button 
                            className='watchButton'
                            onClick={handleClick} 
                            >
                                <PlayArrowIcon style={{
                                    width: '15px',
                                    height: '15px',
                                    flexShrink: '0',
                                    fill: '#FFF',
                                }}/>
                                Watch Now
                            </Button>

                            <div className='watchlist'>
                                <AddIcon 
                                style={{
                                    width: '15px',
                                    height: '15px',
                                }}
                                />
                                <Text id='watchlist'>
                                    WATCHLIST
                                </Text>
                            </div>

                            <div className='share'>
                                <ShareIcon 
                                style={{
                                    width: '15px',
                                    height: '15px'
                                }}/>
                                <Text id='share'>
                                    Share
                                </Text>
                            </div>
                        
                    </div>
                </div>
            </>
          );
        })}
      </Carousel>

    </div>
      {showVideo && <VideoPlayer showVideoo={showVideo} setShowVideoo = {setShowVideo}/>}
      
    </>
  );
}

export function Highlight({text,trending}){
    const navigate = useNavigate()
    
    return (
        <div className='box'>
           <Text className='heading'>{text}</Text> 
           <div className='highlight-img'>
           {trending?.map((item) => {
                return (
                  <>
                    <Image 
                    className="image"
                    style={{
                        width: '80px',
                        height: '100px',
                    }}
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt={item?.title}
                    onClick={() => navigate(`/description/${item?.id}`)}
                    / >

                  </>
                 
                )
           })}
           </div>
        </div>
    )
}






export default function Home() {
  const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/trending/movie/day',
          headers: {accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U',
        }
    };

    const [trending,setTrending]=useState([]);

    useEffect(() => {
      axios.request(options)
      .then(function (response) {
          console.log("trending movies response ",response.data.results);
          setTrending(response.data.results);
        })
      .catch(function (error) {
           console.error(error);
      }) 
    },[])

  return (
    <DashboardLayout>
      <PopUp trending={trending} />
      <Highlight text='Trending' trending={trending}/>
      <Highlight text='Horror' trending={trending} />
      <Highlight text='Sci-fi' trending={trending} />
    </DashboardLayout>
  );
}
