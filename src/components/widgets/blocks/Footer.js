import * as React from 'react';
import {Typography} from '@mui/material/';
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
            className='footer-text'> <img src={Mail.src} alt="" width="60px"/>bootcraft.club@gmail.com</Typography>
          <Typography
            className='footer-text'><img src={Instagram.src} alt="" width="60px"/> @bootcraft.club</Typography>
        </div>
      </Container>
    );
  }
}
export default Footer;