import * as React from 'react';
import {Box,Typography,Card,Grid,Container} from '@mui/material/';
import NavBar from '../src/components/navigation/NavBar'
import {Footer } from '../src/components/widgets/blocks';
import * as days from 'dayjs';
import 'dayjs/locale/es-us'

import TestimonyCard from '../src/components/tools/TestimonyCard';
class CharlaPadres extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentTime:null,
      nextMeeting:null,
      days:0,
      hours:0,
      minutes:0,
      seconds:0,
      interval:null,
    }
    this.nextParentMeeting = this.pushNextDate.bind(this);
  }

  pushNextDate(){
    const date = days();
    return date.locale('es-us').format('dddd D, MMMM YYYY hh:mmA');
  }
  componentWillMount(){
    this.setState({nextMeeting: days('2022-03-29 20:30:00')});
    this.setState({interval: setInterval(() =>{
      this.setState({currentTime: days()});
      const diffInSeconds = this.state.nextMeeting.diff(this.state.currentTime,'second');
      this.setState({
        days: Math.floor(diffInSeconds /(3600*24)),
        hours: Math.floor(diffInSeconds % (3600*24)/3600),
        minutes: Math.floor(diffInSeconds %3600 / 60),
        seconds: Math.floor(diffInSeconds % 60),
      });
    }, 
    1000)});
  }
  componentWillUnmount() {
    clearInterval(this.state.interval); 
   }
  render(){
    return(
      <Box>
        <NavBar/>
        <div className="registration-link">
          <div className="registration-text">Clase gratuita para padres: 
              Descubre cómo tu hijo puede<br/> ganar  el poder de la computación en Minecraft</div>
          <div className="registration-button">
          <a
              className='btn__main-video--cobalt charla'
              variant="contained"
              href='https://us02web.zoom.us/meeting/register/tZUkde2gqTsiHdCBo8Tv_OFnba0fA_C0R1hl'>Registrarme</a>
          </div>
        </div>
        <section className="invitation-to-talk">
          <div className="invitation-text">
            <p className="invitation-top-text">
              Nos hemos inspirado en toda la investigación y los descubrimientos en innovación educativa que Microsoft Research ha compartido, así como en los más interesantes aportes de las neurociencias en el área del aprendizaje, para crear una experiencia basada en juegos para que los chicos comiencen a ser pensadores computacionales y puedan aplicar esta lógica para resolver problemas en su día a día.
            </p>
            <p className="invitation-bottom-text">
            Te contaremos más de esta posibilidad para tu hijo en nuestra charla para padres...
            </p>
          </div>
          <div className="timer">
          <Card
          className='wrapper-counter-column'>
           <Grid item xs={12} md={12}>{ this.state.nextMeeting.locale('es-us').format('dddd D, MMMM YYYY hh:mmA') }</Grid> 
           <Grid item xs={12} md={12} className="event-start">El Evento Comenzara en:</Grid> 
           <div
            className='wrapper-counter-row'>
            <Grid 
              item xs={3} md={3}>
              <Typography
               className="typography__subtitle--medium">
                {this.state.days}
              </Typography>
              <Typography
               className="typography__subtitle--medium">
                Dias
              </Typography>
            </Grid>
            <Grid item xs={3} md={3}>
              <Typography
               className="typography__subtitle--medium">
                {this.state.hours}
              </Typography>
              <Typography
               className="typography__subtitle--medium">
                Horas
              </Typography>
            </Grid>
            <Grid item xs={3} md={3}>
              <Typography
               className="typography__subtitle--medium">
                {this.state.minutes}
              </Typography>
              <Typography
               className="typography__subtitle--medium">
                Minutos
              </Typography>
            </Grid>
            <Grid item xs={3} md={3}>
              <Typography
               className="typography__subtitle--medium">
                {this.state.seconds}
              </Typography>
              <Typography
               className="typography__subtitle--medium">
                Segundos
              </Typography>
            </Grid>
           </div>
        </Card>
          </div>
        </section>
        <section className="invitation-details">
          <p className="title-details">
          Detalles de la clase
          </p>
          <p className="invitation-details">
          El evento será online y tiempo real a través de Zoom Meeting.
          <br/>
          Fecha: Martes 29 de Marzo
          <br/> 
          Hora: 8:30 p.m. UTC(-4:00)
          <br/>
          Al registrarte recibirás las corrdenadas por correo electrónico.
          </p>
          <a
              className='btn__main-video--cobalt charla'
              variant="contained"
              href='https://us02web.zoom.us/meeting/register/tZUkde2gqTsiHdCBo8Tv_OFnba0fA_C0R1hl'>Registrarme</a>
        </section>
        <Container className="invitation-testimony">
          <p className="testimony-title">
          ¿Qué dicen los padres sobre esta clase?
          </p>
          <TestimonyCard 
        fatherImg="A" 
        fatherName="Adriana Puleo mamá de Santiago  (14 años)" 
        testimony="“Antes pensaba que Minecraft era otro videojuego más. Después de esta charla lo veo como un lugar que reta a mi hijo a pensar cómo solucionar problemas utilizando el pensamiento computacional. Me emociona que desde ahora pueda ir cumpliendo su sueño de convertirse en un programador”"
        fatherLinkin='https://www.linkedin.com/in/adrianapuleo/'/>
        </Container>
        <Footer/>
      </Box>
    );
  }
}
export default CharlaPadres;