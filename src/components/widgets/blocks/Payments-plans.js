import * as React from 'react';
import {Box, Typography,Card,CardContent,Button} from '@mui/material';
import Plans from '../../tools/Plans';

class PaymentsPlans extends React.Component{
    render(){
      return(
        <Box
          className='payment-plans'
          id="payment">
          <Typography className='typography__title--medium plans-title'> 
              Invierte en su aprendizaje para el futuro desde ahora 
          </Typography>
          <Typography className='typography__title--small plans-subtitle'> 
          Invierte en su aprendizaje para el futuro desde ahora
          Suscríbelos a la experiencia Bootcraft para que comiencen a entrenar junto a una increíble comunidad de jugadores y pensadores computacionales: 
          </Typography>
          <div className="plans-wrapper">
           <Card>
            <CardContent>
              <Box
                className='plan-title-monthly'>
                Plan mensual
              </Box>
              <Box>
                <Typography 
                  className='typography--price'>  $60 </Typography>
              </Box>
              <Box
                className='payment-offer-list'>
                <ul>
                  <li>16 horas de aprendizaje en computación para el futuro,<br/> en grupos pequeños y con un mentor</li>
                  <li>1 encuentro con la comunidad</li>
                </ul> 
              </Box>   
              <a 
                className='btn__main-video'
                variant="contained">Entra al Bootcraft</a> 
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Box
                className='plan-title-anually'>
                Plan anual
              </Box>
              <Box>
                <Typography 
                  className='typography--price'>  $550 </Typography>
              </Box>
              <Box
                className='payment-offer-list'>
                <ul>
                  <li>160 horas de aprendizaje en computación para el futuro, <br/>  en grupos pequeños y con un mentor</li>
                  <li>10  encuentros con la comunidad</li>
                </ul> 
              </Box>   
              <a 
                className='btn__main-video'
                variant="contained">Entra al Bootcraft</a> 
            </CardContent>
          </Card>
          </div>
        </Box>
      );
    }
}
export default PaymentsPlans;