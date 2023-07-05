import { Box } from '@mui/material';
import React from 'react';
import {Paper} from '@mui/material';
import ApexChart from '../Demo';
import {Typography} from '@mui/material';

const ParcelStatics = () => {
  return (
    <div>
      <Box
      sx={{
        marginLeft: '500px',
        marginTop: '100px'
        
      }}
      >
        <Paper elevation={3}
        
        sx={{
          
          width: '800px',
          height: '500px',
          paddingTop: '50px'
          
        }}
        >

        <Box
        sx={{
          marginTop: '10px',
          mx: '10px'
        }}
        >
        <ApexChart />
        </Box>
        
        </Paper>
          

      </Box>
    </div>
  )
}

export default ParcelStatics;
