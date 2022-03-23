import * as React from 'react';
import {Box, Typography,CardMedia,Button,Grid,Modal,Icon} from '@mui/material';
import PlayArrow from "@mui/icons-material/PlayArrow";
//img
import MinecraftKid from '../../../../public/assets/img/banner.jpg';

class TopFrontPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open :false,
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4},
      }

      //modal handler
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
  }
  handleOpen() {
    console.log(this);
    this.setState({open:true});
  }
  handleClose(){
    this.setState({open:false});
  }
  render(){
    return(
      <Grid
        className='top-home'>
          <Box 
            className='home-text'>
            <Typography 
              className='typography__title--big white main-text'
              component="span">
                  Prepara a tu hijo para<br/> el futuro, con el poder <br/>de la programación
            </Typography>
          </Box> 
        <Box
          className='home-box__bottom-message'>
          <Box
          className="home-box__top-message home-blue">
        </Box>
          <img 
            src={MinecraftKid.src} alt="" /> 
        </Box>
        <Box>
          <Box
            className='text-img-wrapper'> 
            <Typography
              className='typography__title--small home-subtitle'>
              Convertimos su pasión en un entorno propicio para <br/>
              aprender competencias claves para el futuro.  
            </Typography>
            </Box>  
        </Box>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={this.state.style}>
            <CardMedia
              component="iframe"
              height="100%"
              src="https://www.youtube.com/embed/8bYE04zxWfk"
              alt="example"
            />
          </Box>
        </Modal>
            <div className="btn__video-wrapper"
              onClick={this.handleOpen}>
              <div className="btn-wrapper">
                <div className='circle'>
                  <PlayArrow />
                </div>
                <div className='text-button'>
                 Ver video sobre Bootcraft 
                </div>
              </div>
            </div>
      </Grid>
    );
  }
}

export default TopFrontPage;