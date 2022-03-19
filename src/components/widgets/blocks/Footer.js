import * as React from 'react';
import {Box,Typography} from '@mui/material/';
import Email from '@mui/icons-material/Email'
import { Container } from '@material-ui/core';
import Mail from '../../../../public/assets/img/Correo.png';
import Instagram from '../../../../public/assets/img/Instagram.png'
class Footer extends React.Component{
  render(){
    return(
      <Container>
        <div 
          className="footer-wrapper">
          <Typography
            className='footer-text'> Comunícate con nosotros:</Typography>
          <Typography
            className='footer-text'> <img src={Mail.src} alt="" width="60px"/>bootcraft.latam@gmail.com</Typography>
          <Typography
            className='footer-text'><img src={Instagram.src} alt="" width="60px"/> @bootcraft.latam</Typography>
        </div>
      </Container>
    );
  }
}
export default Footer;