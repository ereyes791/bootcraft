import { Box, TextField,Card} from '@mui/material';
import NavBar from '../src/components/navigation/NavBar'
import * as React from 'react';
import axios from 'axios';

class ParentInfo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name:null,
      email:null,
      celular:null,
    }
    this.sendInfo=this.sendInfo.bind(this);
  }
  sendInfo(e){
    e.preventDefault();
    const data = {
      Name: this.state.name,
      Email: this.state.email,
      Phone: this.state.celular,
    }
    axios.post('https://sheet.best/api/sheets/96180dfb-3f29-44ce-b499-a742e9dc2e0a',data).then((response)=>{
      console.log(response);
    })
    console.log(this.state.name,this.state.email,this.state.celular);
  }
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
          onChange={(e)=> this.setState({name:e.target.value})}
        />
        <TextField
          className='input-data'
          id="standard-textarea"
          label="Correo Electronico"
          placeholder="Email"
          multiline
          variant="standard"
          onChange={(e)=> this.setState({email:e.target.value})}
        />
        <TextField
          className='input-data'
          id="standard-textarea"
          label="Telefono Celular"
          placeholder="Celular"
          multiline
          variant="standard"
          onChange={(e)=> this.setState({celular:e.target.value})}
        />
        <button
          type='submit'
          className='btn__main-video--cobalt charla'
          variant="contained"
          onClick={this.sendInfo}>
            Continuar
        </button>
        </Card>
      </Box>);
      </div>);
  }
}
export default ParentInfo;