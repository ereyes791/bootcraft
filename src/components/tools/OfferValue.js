import * as React from 'react';
import Grid from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class OfferValue extends React.Component{
  constructor(props) {
      super(props);
    }
  render(){
    return(
      <div
        className='offer-wrapper-value'>
        <img 
          src={this.props.src} 
          width="150px"
          alt="" />
        <Typography className='typography__subtitle--medium offer-value'>
          {this.props.text}
        </Typography>
      </div>
    );
  }
}
export default OfferValue;