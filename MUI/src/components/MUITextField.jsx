import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import PersonIcon from '@mui/icons-material/Person'

const MUITextField = () => {
  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <TextField label="Standard" variant="standard" />

        <TextField label="Filled" variant="filled" />

        <TextField label="Outlined" variant="outlined" />
      </div>

      <div style={{ marginBottom: "50px" }}>
        <TextField
          label="Standard"
          variant="standard"
          color="secondary"
        />

        <TextField
          label="Filled"
          variant="filled"
          color="secondary"
        />

        <TextField
          label="Outlined"
          variant="outlined"
          color="secondary"
        />
      </div>

      <div style={{ marginBottom: "50px" }}>
        <TextField
          label="Standard"
          variant="standard"
          color="primary"
        />

        <TextField
          label="Filled"
          variant="filled"
          color="primary"
        />

        <TextField
          label="Outlined"
          variant="outlined"
          color="primary"
        />
      </div>

      <div style={{ marginBottom: "50px" }}>
        <TextField
          label="Standard"
          variant="standard"
          color="success"
        />

        <TextField
          label="Filled"
          variant="filled"
          color="success"
        />

        <TextField
          label="Outlined"
          variant="outlined"
          color="success"
          helperText="Success"
        />
      </div>

      <div style={{ marginBottom: "50px" }}>
        <TextField label='Kimlik No' disabled variant='outlined' color='warning' />
      </div>

      <div style={{ marginBottom: "50px" }}>
        <TextField InputProps={{readOnly:true}} label='Kimlik No' value={'berkay'} disabled variant='outlined' color='warning' />
      </div>

      <div style={{ marginBottom: "50px" }}>
        <TextField
        label='Kimlik No'
        
        variant='outlined'
        slotProps={{
          input: {
            endAdornment: ( //başta olsun istersen startAdornment
              <InputAdornment position="end">
                <PersonIcon />
              </InputAdornment>
            )
          }
        }} 
         ></TextField>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <TextField label='Kimlik No' variant='outlined' size='small' />
      </div>

    </div>
  );
}

export default MUITextField