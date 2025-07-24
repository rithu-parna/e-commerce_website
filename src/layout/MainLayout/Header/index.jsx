import { useRef, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  ListItemIcon,
  ListItemText,
  Select,
  Button,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoSection from '../LogoSection';
// import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ImageIcon from '@mui/icons-material/Image';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import WeekendIcon from '@mui/icons-material/Weekend';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ShowerIcon from '@mui/icons-material/Shower';
import FaceIcon from '@mui/icons-material/Face';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import LandingPage from '../../../views/landingPage/index';
// import ProfileSection from './ProfileSection';
// import NotificationSection from './NotificationSection';

const SearchWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f1f1f1',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  paddingLeft: theme.spacing(1),
  width: '100%',
  maxWidth: 500
}));

const TopLinks = () => (
  <Box sx={{ display: 'flex', gap: 2, fontSize: 12 }}>
    <Typography sx={{ cursor: 'pointer' }}>Account</Typography>
    <Typography sx={{ cursor: 'pointer' }}>Track Order</Typography>
    <Typography sx={{ cursor: 'pointer' }}>Support</Typography>
  </Box>
);

const CountrySelector = () => (
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', fontSize: 12 }}>
    <Typography sx={{ cursor: 'pointer' }}>🇺🇸 United State</Typography>
    <Typography sx={{ cursor: 'pointer' }}>USD</Typography>
    <Typography sx={{ cursor: 'pointer' }}>Bangla</Typography>
  </Box>
);

export default function Header() {
  const scrollRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const handleDropdownOpen = (event) => setAnchorEl(event.currentTarget);
  const handleDropdownClose = () => setAnchorEl(null);
  const navItems = ['☰ All Categories', 'Homepage', 'Shop', 'Pages', 'About', 'Blog', 'Contact'];

  const categoryList = [
    { label: 'Mobile & Laptops', icon: <LaptopMacIcon /> },
    { label: 'Gaming Entertainment', icon: <SportsEsportsIcon /> },
    { label: 'Image & Video', icon: <ImageIcon /> },
    { label: 'Vehicles', icon: <DriveEtaIcon /> },
    { label: 'Furnitures', icon: <WeekendIcon /> },
    { label: 'Sport', icon: <SportsSoccerIcon /> },
    { label: 'Food & Drinks', icon: <FastfoodIcon /> },
    { label: 'Fashion Accessories', icon: <CheckroomIcon /> },
    { label: 'Toilet & Sanitation', icon: <ShowerIcon /> },
    { label: 'Makeup Corner', icon: <FaceIcon /> },
    { label: 'Baby Items', icon: <ChildCareIcon /> }
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -150 : 150;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
  return (
    <>
      {/* Top Bar */}
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 3, py: 0.5 }}>
          <TopLinks />
          <CountrySelector />
        </Box>

        <Divider />

        {/* Main Toolbar */}
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar sx={{ justifyContent: 'space-between', px: 4, flexWrap: 'wrap', gap: 3, py: 3 }}>
            {/* Logo */}
            <LogoSection />

            {/* Search */}
            <SearchWrapper>
              <Select
                defaultValue="All Categories"
                variant="standard"
                disableUnderline
                sx={{ fontSize: 14, minWidth: 120, pl: 2 }}
                IconComponent={ArrowDropDownIcon}
              >
                <MenuItem value="All Categories">All Categories</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Books">Books</MenuItem>
              </Select>
              <Divider orientation="vertical" flexItem />
              <InputBase placeholder="Search Product..." sx={{ ml: 1, flex: 1 }} />
              <IconButton sx={{ bgcolor: '#0f615ee3', color: 'white', borderRadius: 0 }}>
                <SearchIcon />
              </IconButton>
            </SearchWrapper>

            {/* Icons */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <IconButton>
                <Badge badgeContent={2} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={1} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={15} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <PersonIcon />
              </IconButton>
            </Box>

            {/* Seller Button */}
            <Button variant="contained" sx={{ bgcolor: '#f9a825', color: '#000' }}>
              Become a Seller
            </Button>
          </Toolbar>
        </AppBar>

        {/* Navigation Menu */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#0f615ee3',
            color: 'white',
            px: 2,
            py: 2.3,
            position: 'relative'
          }}
        >
          {/* Left Arrow */}
          {isMobile && (
            <IconButton onClick={() => scroll('left')} sx={{ color: 'white', position: 'absolute', left: 4, zIndex: 1 }}>
              <ChevronLeftIcon />
            </IconButton>
          )}

          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
              width: '100%',
              px: isMobile ? 5 : 0
            }}
          >
            {navItems.map((label) =>
              label === '☰ All Categories' ? (
                <Typography key={label} sx={{ cursor: 'pointer', fontSize: '16px', flexShrink: 0 }} onClick={handleDropdownOpen}>
                  {label}
                </Typography>
              ) : (
                <Typography key={label} sx={{ cursor: 'pointer', fontSize: '16px', flexShrink: 0 }}>
                  {label}
                </Typography>
              )
            )}
          </Box>

          {isMobile && (
            <IconButton onClick={() => scroll('right')} sx={{ color: 'white', position: 'absolute', right: 4, zIndex: 1 }}>
              <ChevronRightIcon />
            </IconButton>
          )}

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDropdownClose}
            PaperProps={{
              sx: {
                mt: 1,
                width: 250,
                maxHeight: 500,
                borderRadius: 2,
                p: 1
              }
            }}
          >
            {categoryList.map((item) => (
              <MenuItem key={item.label} onClick={handleDropdownClose}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
                <ArrowRightIcon sx={{ ml: 'auto' }} />
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <LandingPage />
      </Box>
    </>
  );
}
