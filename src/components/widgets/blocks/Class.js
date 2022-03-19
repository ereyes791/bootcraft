import * as React from 'react';
import {Container,Typography, CardMedia,Box} from '@mui/material'

class Class extends React.Component{
  render(){
    return(
      <Container
        className='home-box__offer'
        id="trainer">
        <Box>
        <Typography
            className="typography__title--small offer-title text-center">
            ¿Cómo es una clase Bootcraft?
          </Typography> 
          <Box
            className='wrapper-video'>
            <CardMedia 
              component="iframe"
              src="https://www.youtube.com/embed/VGs5YZRmHuo"/>

          </Box>
        </Box>
      </Container>
    );
  }
}

export default Class;