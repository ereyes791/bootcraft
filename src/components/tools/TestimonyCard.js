import * as React from 'react';
import { Card,CardContent, Typography,Avatar } from '@material-ui/core';

class TestimonyCard extends React.Component{
  constructor(props) {
      super(props);
    }
  render(){
    return(
      <Card
        className='testimony-card'>
        <CardContent>
            <div className="hr-top"></div>
            <div className="avatar-wrapper">
              <Avatar
                className='img-circle'>{this.props.fatherImg}</Avatar>
            </div>
            <Typography className="typography__father-name">
            {this.props.fatherName}
            </Typography>
            <Typography className="typography__testimony">
            {this.props.testimony }
            </Typography>
            <a href={this.props.fatherLinkin} className="typography__linkin-link">
            {this.props.fatherLinkin}
            </a>
        </CardContent>
      </Card>
    );
  }
}
export default TestimonyCard;