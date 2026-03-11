import Tab from '@mui/material/Tab'
import './styles/Pokedex.scss'
import { Box, Tabs } from '@mui/material'
import type { TabsProps } from '@mui/material'
import React from 'react';
import styled from '@emotion/styled';

type StyledTabsProps = TabsProps;

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
  />
))({
  '& .MuiTabs-indicator': {
    height: '100%',
    top: 0,
    borderRadius: '10px',
    background: 'linear-gradient(135deg, rgba(61, 224, 211, 0.28) 0%, rgba(57, 140, 179, 0.5) 100%)',
    boxShadow: 'inset 0 0 0 1px rgba(61, 224, 211, 0.4)',
    zIndex: 0,
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '& .MuiTab-root': {
    zIndex: 1,
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ }) => ({
  textTransform: 'none',
  color: 'rgba(255,255,255,0.7)',
  fontWeight: 600,
  borderRadius: '10px',
  transition: 'color 0.35s ease',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    background: 'rgba(100, 95, 228, 0.32)',
  },
  ':focus': {
    outline: 'none'
  }
}));


export default function Pokedex() {
  const [value, setValue] = React.useState(0);
  const items = [
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unova",
    "Kalos",
    "Alola",
    "Galar",
    "Paldea"
  ];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ background: 'radial-gradient(circle,rgba(0, 179, 164, 1) 0%, rgba(0, 41, 84, 1) 100%);' }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        className='pokedex-tabs'
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {items.map((item) => (
          <StyledTab key={item} label={item} />
        ))}
      </StyledTabs>
    </Box>
  )
}