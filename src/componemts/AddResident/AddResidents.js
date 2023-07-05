import React from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';

const AddResidents = () => {
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
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          my: '10px',
          mx: '10px'
        }}
        >
        <Typography variant='h3'
        sx={{textAlign: 'center',
        pb:'15px'
        }}
        >
          Add-Residents
        </Typography>
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

export default AddResidents;
