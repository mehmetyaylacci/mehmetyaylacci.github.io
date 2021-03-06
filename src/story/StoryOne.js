import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

/**
 * 
 */
const StoryOne = (props) => {
    return (
        <Card 
            sx={{ 
                width: '100%', 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
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
            <Box pt={3}>
                <CardMedia
                    component="img"
                    src={require('./mehmet.JPG')}
                    alt="bilkent"
                    sx={{
                        objectFit: 'scale-down', 
                        height: {xs: 100, md: 200},
                        width: {xs: 100, md: 200}, // added width so it's the same as height
                        borderColor: 'primary.main', // Border color
                        borderWidth: 2, // Border width
                        borderStyle: 'inset', // Border style
                        borderRadius: '50%' // make the image circular
                    }}
                />
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign='center' pt='20px'>
                    About Me
                </Typography>
                <Typography gutterBottom variant="h6" component="div" textAlign='center' pt='10px' mx='20px' sx={{ fontSize: { xs: '4vw', sm: '4vw', md: '1.3vw' } }}>
                    I am <b>Mehmet Yaylaci</b>, a computer engineering graduate from <b>Bilkent University</b>. The highschool I graduated from is <b>Kabatas Erkek Lisesi</b>.<br/><br/>
                    My university entrance exam rating was <b>1650th</b> and high school entrance exam rating was <b>560th</b>.<br/><br/>
                    I am deeply passionate about: <b>Big Data</b>, <b>Business Intelligence</b> and <b>Cloud</b>.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default StoryOne;