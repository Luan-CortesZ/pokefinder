import './styles/Pokedex.scss'
import { Box } from '@mui/material'
import React from 'react';
import { PokeTab, PokeTabs } from './PokeTabs';
import PokePanel from './PokePanel';

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
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PokeTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        className='pokedex-tabs'
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {items.map((item) => (
          <PokeTab key={item} label={item} />
        ))}
      </PokeTabs>
      {items.map((item) => (
          <PokePanel value={value} index={items.indexOf(item)}>
            {item}
          </PokePanel>
        ))}
    </Box>
  )
}