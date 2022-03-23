import * as React from 'react';
import {Box, Typography,Container} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import TestimonyCard from '../../tools/TestimonyCard';

class Testimony extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      carrusel : [
        {
          fatherImg: "A",
          fatherName: "Angelo Burgazzi papá de Daniel  (13 años)",
          testimony:'"Con esta propuesta Bootcraft logra una intersección virtuosa, en la que se une el entretenimiento lúdico que hace que los chamos quieran participar con el crecimiento y el aprendizaje... Yo soy computista y trabajo en ingienería de software y puedo percibir que de una manera natural los chamos están entrando en el pensamiento computacional \n que es la base de un posible desarrollo."',
          fatherLinkin:'https://www.linkedin.com/in/burgazzi/',
        },
        {
          fatherImg: "V",
          fatherName: "Victoria mamá de Santiago (13 años) y Marcel (7 años)",
          testimony:'"Impresionante, la metodología de aprendizaje de ustedes es genial. Ellos empezaron de cero, no sólo en el tema de programación sino también en el juego y en sólo 6 semanas lograron hacer proyectos increíbles. Desarrollaron un gran compromiso, no tenía que recordarles los horarios o las actividades que tenían que hacer... Creo que es una excelente alternativa de aprendizaje que les permite ganar habilidades para el futuro.."',
          fatherLinkin:'https://www.linkedin.com/in/victoria-gil-004104ba/',
        },
        {
          fatherImg: "D",
          fatherName: "David Lanz papá de Valeria (11 años)",
          testimony:'"Nunca pensé que a Valeria le pudiera gustar la programación y mucho menos que lograra este nivel, me llena de mucho orgullo y satisfacción como papá. Yo soy del área de computación y sé lo complicado que puede ser enseñarle a otra persona y lo que observo de esta experiencia es que le gustó, la apasionó y explotó toda su creatividad. Definitivamente es impresionante, en todos los años que tengo de experiencia en esta área nunca había visto que se pudiera aprender a programar de esta manera."',
          fatherLinkin:'https://www.linkedin.com/in/davidolanzg/?originalSubdomain=ve',
        },
      ],
    };
    this.listTestimony = this.createCarruselArray.bind(this);
  };  
  createCarruselArray(){
    return this.state.carrusel.map(
      (value) => <TestimonyCard 
        fatherImg={value.fatherImg} 
        fatherName={value.fatherName} 
        testimony={value.testimony}
        key={value.testimony}
        fatherLinkin={value.fatherLinkin}/> );
  }
    render(){
        return(
            <Container>
                <Typography 
                  className='typography__title--medium testimony-title'
                  id="testimony"> 
                    ¿Qué dicen los padres sobre Bootcraft? 
                </Typography>
                <Box>
                    <Carousel
                      interval="6000">
                        {this.listTestimony()}
                    </Carousel>
                </Box>
            </Container>
            );
    }
}
export default Testimony;