import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const SearchBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#ffff', color: '#78909C',  boxShadow: '0px 0px' }}>
          <Toolbar disableGutters={true}>
            <Search style={{ border: '1px solid #CFD8DC', borderRadius: 4, width: 300}} >
              <SearchIconWrapper>
                <SearchIcon style={{color: '#2563EB'}}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar" 
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            </Toolbar>  
        </AppBar>
      </Box>
    </>
  )
}
