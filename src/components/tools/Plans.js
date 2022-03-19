import * as React from 'react';
import { Card,CardContent, Typography, Box, Button } from '@material-ui/core';

class Plans extends React.Component{
  constructor(props) {
      super(props);
    }
  render(){
    return(

      <Box>
        <Card>
          <CardContent>
            <Box
              className='plan-title'>
              <Typography> Plan mensual</Typography>
            </Box>
            <Box>
              <Typography 
                className='typography--price'>  $60 </Typography>
            </Box>
            <Box>
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul> 
            </Box>   
            <Button 
              className='btn__main-video'
              variant="contained">Registrarme</Button> 
          </CardContent>
        </Card>
      </Box>
    );
  }
}
export default Plans;