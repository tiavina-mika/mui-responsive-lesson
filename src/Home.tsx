import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled, useMediaQuery, useTheme } from '@mui/material';

const StyledContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'blue',
  },
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'red',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    backgroundColor: 'yellow',
  },
  minHeight: '100vh',
}));

const Home = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <StyledContainer>
      <Stack spacing={{ xs: 1, lg: 5 }} direction={{ xs: 'column', lg: "row"}}>
        <Button variant="text">Text</Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: { xs: 'pink', lg: 'green'},
            fontSize: { xs: 16, lg: 22 },
          }}
        >
          {isTablet ? 'Tablet' : 'Desktop'}
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </StyledContainer>
  );
}

export default Home;
