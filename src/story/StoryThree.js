import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Telegram from './Telegram';

/**
 * 
 */
const StoryThree = (props) => {
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
                <Telegram>
                    
                </Telegram>
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
            </CardContent>
        </Card>
    );
}

export default StoryThree;