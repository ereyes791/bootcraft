import * as React from 'react';
import {Box, Typography,Container} from '@mui/material';

//img in react = totally dogshit
import MIE from '../../../../public/assets/img/MIE.png';
import MBA from '../../../../public/assets/img/member-badge-certified.png'
import RPC from '../../../../public/assets/img/RedParaCrecer.png'
import AN from '../../../../public/assets/img/Academia N.png';

class Cerfications extends React.Component{
  render(){
    return(
      <Box
        className='certification-box'> 
        <Typography 
        className='typography__title--medium center-text certification-title'>
        Certificaciones y organizaciones que nos apoyan
        </Typography>
        <Box
          className='certifications'>
          <img src={MIE.src} alt="" />
          <img src={MBA.src} alt="" />
          <a href="https://redparacrecer.org/cgi-win/be_alex.cgi?QuienesSomos&nombrebd=redparacrecer&&Sesion=1728249943">
            <img src={RPC.src} 
            height="150px"  
            alt="" /> 
          </a>
          <a href="https://academia-n.com/">
            <img src={AN.src} 
              height="150px"
              href="https://academia-n.com/"
              alt="" />
          </a>
        </Box>
      </Box>
      );
  }
}
export default Cerfications;