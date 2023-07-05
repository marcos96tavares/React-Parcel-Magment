import React from 'react'
import { Typography } from '@mui/material';
import {Box} from '@mui/material';
import {Paper} from '@mui/material';
import { Grid } from '@mui/material';
import SelectFieldDemo from '../selector/SelectIndicator';
import {TextField} from '@mui/material';
import {Stack} from '@mui/material';
import { display } from '@mui/system';
import {Button} from '@mui/material';



const ParcelReceived = () => {
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
      width: '500px',
      height: '500px'
    }}
    >
        <Typography variant='h3'
        sx={{textAlign: 'center',
        pb:'15px'
        }}
        >
          Parcel-Received
        </Typography>

    
    <Box
    sx={{
      mx:5,
      
    }}
    >
    <SelectFieldDemo />
    <Stack direction="row" spacing={2}
        sx={{
          mt:5,
        }}>
        <TextField
      helperText="Please enter your first-name"
      id="demo-helper-text-aligned"
       label="First-Name"
       sx={{
        
        marginBottom: '25px',
       }}
/>
<TextField
      helperText="Please enter your last-name"
      id="demo-helper-text-aligned"
       label="Last-Name"
       sx={{
        
        marginBottom: '25px',
       }}
/>
</Stack>

<Stack direction="row" spacing={2}>

<TextField
          id="outlined-number"
          label="Flat-Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
<TextField
      helperText="Please enter the flat name"
      id="demo-helper-text-aligned"
       label="Flat-Name"
/>

  
</Stack>

        <Stack
        direction="row" spacing={30}
        sx={{
          mt: '50px',    
        }}
        >

<Button variant="contained" color="success" sx={{ml:'20px'}}>
  ADD
</Button>
<Button variant="outlined" color="error">
  CLEAR
</Button>
        </Stack>

    </Box>

    </Paper>


    </Box>
    </div>
  )
}

export default ParcelReceived;
