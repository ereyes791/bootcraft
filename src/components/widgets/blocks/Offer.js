import * as React from 'react';
import {Typography,Container,Box,Button} from '@mui/material';
import OfferValue from '../../tools/OfferValue';
// logos
import Computacion from '../../../../public/assets/img/Computación.png';
import Comunidad from '../../../../public/assets/img/Comunidad.png';
import Portafolio from '../../../../public/assets/img/Portafolio.png';
import Videogame from '../../../../public/assets/img/Videojuegos.png';

class Offer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      valueOffer:[
        {src:Computacion.src,
          text:'Comprenderá la informática del siglo XXI'},
        {src:Videogame.src,
          text:'Diseñará y programará sus propios videojuegos'},
        {src:Comunidad.src,
          text:'Construirá un portafolio con sus creaciones'},
        {src:Portafolio.src,
          text:'Formarará parte de una comunidad de practicantes '},
      ],
    }
    this.list = this.createOfferValue.bind(this);
  }
  createOfferValue(){
      return this.state.valueOffer.map(
        (value) => <OfferValue key={value.text} src={value.src} text={value.text}/> );
  }
  render(){
    return(
      <div>
      <Container
        className='home-box__offer'>
          <Box>
            <Typography
              className="typography__title--small offer-title">
              ¿Qué y cómo aprenderá tu hijo en Bootcraft? 
            </Typography>
            <Typography 
              className="typography__subtitle--medium offer-subtitle">
              Ahora tu hijo podrá pensar y resolver problemas complejos usando computadoras,<br/> algoritmos y datos. Mientras colabora, crea y juega con amigos. 
            </Typography>
          </Box>
        </Container>
        <Box
          className='home-box__offer'>
            <section className='offer-list' 
              sx = {{ flexDirection: { xs: 'column', md: 'row' } }}>
              {this.list()}
            </section>
            <Typography
              className="typography__title--small__offer-title">
              ¡Logra que tu hijo se convierta en un creador!
            </Typography>
          </Box>
      </div>
    );
  }
}

export default Offer;