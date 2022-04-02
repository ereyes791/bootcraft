import * as React from 'react';
import { Container , Typography, 
  Card, Grid, Button } from '@mui/material';
import * as days from 'dayjs';
import 'dayjs/locale/es-us'
import { Box } from '@mui/system';



class Invitation extends React.Component{

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
    return date.locale('es-us').format('dddd D, MMMM YYYY HH:mm');
  }
  componentWillMount(){
    this.setState({nextMeeting: days('2022-04-05 20:30:00')});
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
      <Box 
      sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
        <Grid 
          item xs={12} md={12}
          className="home-box__top-message invitation-box">
          <Typography 
            className='typography__title--medium white center-text invitation-title'>Toma una clase para padres 
          </Typography>
          <Typography 
            className='typography__title--small white center-text invitation-subtitle'>Conoce el sistema Bootcraft de primera mano, 
            conoce al equipo y resuelve todas tus dudas.<br/> Un creador computacional necesita un padre que fortalezca
             a su hijo en el camino.
          </Typography> 
        </Grid>
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
        <a 
          className='btn__main-video--cobalt'
          variant="contained"
          href='https://mailchi.mp/72d33ea8a72d/clasepadres'>Registrarme</a>
      </Grid>
    </Box>
  
    );
  }

}

/*


*/

export default Invitation;