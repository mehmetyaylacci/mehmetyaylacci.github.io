import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import Telegram from './Telegram';

/**
 * 
 */
const StoryThree = () => {
    return (
        <Card 
            sx={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: 10,
                borderColor: 'primary.main', // Border color
                borderWidth: 2, // Border width
                borderStyle: 'solid', // Border style
                boxShadow: 10, // Shadow depth
                bgcolor: 'background.paper', // Background color
                '&:hover': {
                    boxShadow: 20,
                    borderWidth: 3,
                },
            }}
        >
            {/* <CardMedia
                component="img"
                src={require('./mehmet.jpg')}
                alt="bilkent"
                sx={{
                    objectFit: 'scale-down', 
                    paddingTop: 3,
                    height: {xs: 100, md: 200}
                }}
            /> */}
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Telegram />
                {/* <CardMedia
                    component="img"
                    src={require('./google.png')}
                    alt="google"
                    sx={{
                        objectFit: 'scale-down',
                        height: { xs: 80, md: 150 }
                    }}
                />
                <Typography gutterBottom variant="h6" component="div" textAlign='center' pt='10px' mx='20px' sx={{ fontSize: { xs: '4vw', sm: '4vw', md: '1.3vw' } }}>
                    Foundations of Business Intelligence<br/>
                    The Path to Insights: Data Models and Pipelines
                </Typography>
                <CardMedia
                    component="img"
                    src={require('./yonsei.png')}
                    alt="yonsei"
                    sx={{
                        objectFit: 'scale-down',
                        height: { xs: 80, md: 150 },
                        paddingTop: 3
                    }}
                />
                <Typography gutterBottom variant="h6" component="div" textAlign='center' pt='10px' mx='20px' sx={{ fontSize: { xs: '4vw', sm: '4vw', md: '1.3vw' } }}>
                    Big Data Emerging Technologies
                </Typography>
                <CardMedia
                    component="img"
                    src={require('./meta.png')}
                    alt="meta"
                    sx={{
                        objectFit: 'scale-down',
                        height: { xs: 80, md: 150 },
                        paddingTop: 3
                    }}
                />
                <Typography gutterBottom variant="h6" component="div" textAlign='center' pt='10px' mx='20px' sx={{ fontSize: { xs: '4vw', sm: '4vw', md: '1.3vw' } }}>
                    Advanced React
                </Typography> */}
                {/* <Button color="primary" variant="contained" fullWidth type="submit" sx={{mt: 10}} >
                    <Link href="https://drive.google.com/drive/folders/15Tyy0VK4gCK7sQKqP78JSK9MGCxltDzB?usp=sharing" underline="none" color="white">
                        Portfolio
                    </Link>
                </Button> */}
            </CardContent>
        </Card>      
    );
}

export default StoryThree;