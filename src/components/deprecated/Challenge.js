import * as React from 'react';
import {Box, Typography,Container} from '@mui/material';

class Challenge extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Container
        className='home-box__challenges'>
        <Box>
          <Typography
          className='typography__justify-text'>
          Todos los sectores de la economía continúan cambiando aceleradamente gracias a los algoritmos,
           el metaverso, el internet de las cosas y toda una serie de tecnologías emergentes de la computación. 
          </Typography>
          <img className="fit-picture"
            src="https://education.minecraft.net/content/dam/education-edition/photography/Get_Started_Tutorials_How_To_4x3.jpg"
            width="200px"
            alt="Grapefruit slice atop a pile of other slices"/>
            <Typography
            className='typography__title--small'>
              Usuario vs. creadores
            </Typography>
            <Typography
              className='typography__justify-text'>
              Todos los sectores de la economía continúan cambiando aceleradamente gracias a los algoritmos,
               el metaverso, el internet de las cosas y toda una serie de tecnologías emergentes de la computación. 
            </Typography>
        </Box>
      </Container>
    );
  }
}

export default Challenge;