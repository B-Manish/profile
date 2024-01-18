import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
  return (
    <Box
      sx={{
        border: '1px solid red',
        width: '100vw',
        height: '100vh',
        background: 'rgb(17 17 17)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Box sx={{ fontSize: '22px', color: 'rgb(255 255 255)' }}>
          BATCHU MANISH
        </Box>
        <Box
          sx={{
            fontSize: '100px',
            color: 'rgb(255 255 255)',
            // fontFamily: 'Gotham',
          }}
        >
          Front-End Developer
        </Box>
      </Box>
      <motion.div>Hello, Framer Motion!</motion.div>
    </Box>
  );
}

export default Home;
