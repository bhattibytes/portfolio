import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LinearDeterminate from './LinearDeterminate';
import Image from 'next/image';
import Logo from '../assets/BB.png';
import LogoWhite from '../assets/BBwhite.png';
import styles from '../styles/Home.module.css';
import useWindowDimensions from './WindowHook';

const pages = ['About', 'Work', 'Github', 'Blog',  'Fun&Games'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [id, setId] = useState(0);

  const { height, width } = useWindowDimensions();

  const handleOpenHamburgerMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseHamburgerMenu = (event) => {
    if (event.target.innerHTML[0] === 'F') {
      return window.location.href = `/Fun&games`
    }
    if (event.target.innerHTML[0] === '<') {
      return window.location.href = `/`;
    } else {
      window.location.href = `/${event.target.innerHTML}`;
      return setAnchorElNav(null);
    }
  }

  const handleCloseNavMenu = (event) => {
    let url = event.target.innerText[0] + event.target.innerText.slice(1).toLowerCase();
    if (url === 'undefined') {
      window.location.href = `/`;
    } else if (url[0] === '<') {
      window.location.href = `/`;
    } else {
      window.location.href = `/${url}`;
      setAnchorElNav(null);
    }
  };

  return (
    <AppBar position="fixed"
    className={styles.AppBar}
    sx={{ borderBottom: "1px solid white", height: "70px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > 
          {/* &nbsp;BhattiBytes */}
          <div className={styles.Logo}>
            <Image id={1} onMouseEnter={() => setId(1)} onMouseLeave={() => setId(0)} src={id == 1 ? Logo : LogoWhite } alt="BhattiBytes Logo" width={60} height={60} />
          </div>
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenHamburgerMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Hamburger Navigation Menu */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseHamburgerMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={`/`}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           BhattiBytes
          </Typography>
          {/* Main Navigation Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                className={styles.NavButton}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', 
                  mx: width > 1415 ? 14 : width > 1270 ? 12 : width > 1125 ? 10 : width > 980 ? 8: 14 
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <LinearDeterminate />
    </AppBar>
  );
};
export default ResponsiveAppBar;



