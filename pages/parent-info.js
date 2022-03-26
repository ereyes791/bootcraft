import { Box, TextField,Card} from '@mui/material';
import NavBar from '../src/components/navigation/NavBar'
import * as React from 'react';

class ParentInfo extends React.Component{
  render(){
    return(
      <div>
        <NavBar/>
      <Box
        component='form'
        className='form-box'>
        <Card
          className='form-card'>
        <TextField
          className='input-data'
          id="standard-textarea"
          label="Nombre del representante"
          placeholder="Nombre"
          multiline
          variant="standard"
        />
        <TextField
          className='input-data'
          id="standard-textarea"
          label="Correo Electronico"
          placeholder="Email"
          multiline
          variant="standard"
        />
        <TextField
          className='input-data'
          id="standard-textarea"
          label="Telefono Celular"
          placeholder="Celular"
          multiline
          variant="standard"
        />
        <a
          className='btn__main-video--cobalt charla'
          variant="contained">
            Continuar
        </a>
        </Card>
      </Box>);
      </div>);
  }
}
export default ParentInfo;