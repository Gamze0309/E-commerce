import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/store';
import { Divider } from '@mui/material';

const settings = ['Logout'];

const HeaderComponent = () => {

  const navigate = useNavigate()

  const products = useSelector((state: RootState)=> state.shoppingCart.products)

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleShoppingPage = () => {
    navigate('/shoppingCart')
    setAnchorElNav(null);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickHome = () => {
    navigate('/home')
  }

  return (
    <AppBar position="static" style={{backgroundColor: '#90827F', color: '#FFFFFF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleClickHome}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography textAlign="center">Home</Typography>
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0, }}>
            <Tooltip title="Shopping Cart">
              <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
                <ShoppingCart style={{color:'#FFFFFF', fontSize: 45}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {products.map((product) => (
                <MenuItem key={product.product.id}>
                  <Box component="span" sx={{ p: 1, mr: 1, border: '1px dashed grey'}}>
                    <Typography textAlign="center">{product.quantity}</Typography>
                  </Box>
                  <Typography textAlign="center">{product.product.title}</Typography>
                </MenuItem>
              ))}
              <Divider/>
              <MenuItem onClick={handleShoppingPage}>
                <Typography textAlign="center">Shopping Cart Page</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderComponent;
