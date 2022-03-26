import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, IconButton,Typography,Toolbar,Box,AppBar,Button,Menu } from '@mui/material';
import img from '../../../public/assets/img/logo_bootcraft.png';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      pages : [
        {name:'Clase para padres',to:'/clasepadres'}, 
        {name:'Entrenamiento',to:'/#trainer'},
        {name:'Testimonios',to:'/#testimony'},  
        // {name:'Team',to:'/team'},  
        // {name:'Suscripción', to:'/#payment'},
        {name:'FAQ',to:'/#FAQ'}],
      anchorElNav:null,
      anchorElUser:null,
    }
    this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this);
    this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this);
    this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this);
    this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this);
   }s
  
  handleOpenNavMenu(event){
      this.setState({anchorElNav:event.currentTarget});
    };
  handleOpenUserMenu(event){
      this.setState({anchorElUser:event.currentTarget});
    };
  
  handleCloseNavMenu(){
      this.setState({anchorElNav:null}); 
    };
  
    handleCloseUserMenu(){
      this.setState({anchorElNav:null}); 
    };
  render(){
    return(
      <Box 
        sx={{ flexGrow: 1,}}>
        <AppBar position="static"
          sx={{ backgroundColor: 'rgba(48, 23, 129, 1)',
            color:'white' }}>
          <Toolbar
            sx={{
              display:'flex', 
              justifyContent: 'space-between',
              backgroundColor: 'rgba(48, 23, 129, 1)',
              color:'white'
            }}>
          <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={(e) => {
                e.preventDefault();
                window.location.href='/';
                }}
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
            >
            <img src={img.src}  width="300px" alt="" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(this.state.anchorElNav)}
                onClose={this.handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
              {this.state.pages.map((page) => (
                <MenuItem key={page.name} onClick={this.handleCloseNavMenu}>
                  <Typography 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href=page.to;
                      }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {this.state.pages.map((page) => (
              <Button
                key={page.name}
                href={page.to}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Typography
            variant="h6"
            noWrap
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='/';
              }}
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img href="/" src={img.src}  width="200px" height="71px"alt="" />
          </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
}

export default NavBar;
