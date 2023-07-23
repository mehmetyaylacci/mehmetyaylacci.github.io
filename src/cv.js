import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StoryOne from './story/StoryOne';
import StoryTwo from './story/StoryTwo';
import StoryThree from './story/StoryThree';

/**
 * 
 */
const CV = () => {
    return (
        <Grid container columnSpacing={{ md: 3 }} sx={{ width: '100%', height: '100%', px: { xs: 3, md: 10 } }}>
            <Grid item xs={12} sm={12} md={4} sx={{ marginTop: '5vh' }}>
                <Box sx={{ flex: 1, height: '90vh' }}>
                    <StoryOne />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ marginTop: '5vh' }}>
                <Box sx={{ flex: 1, height: '90vh' }}>
                    <StoryTwo />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ marginTop: '5vh', paddingBottom: '5vh' }}>
                <Box sx={{ flex: 1, height: '90vh' }}>
                    <StoryThree />
                </Box>
            </Grid>
        </Grid>
    );
}

export default CV;