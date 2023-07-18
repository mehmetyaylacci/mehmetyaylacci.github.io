import React from "react";
import { Box } from '@mui/system';

const Background = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(to top right, #B0C4DE, #F0F8FF)',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          zIndex: -1,
        },
      }}
    />
  );
};

export default Background;
