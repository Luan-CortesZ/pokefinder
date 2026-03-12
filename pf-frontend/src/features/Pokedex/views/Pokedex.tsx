import './styles/Pokedex.scss'
import { Box } from '@mui/material'
import React from 'react';
import { PokeTab, PokeTabs } from './PokeTabs';
import PokePanel from './PokePanel';
import { pokemons } from '../../../models/pokemon';
import PokeBox from './PokeBox';

export default function Pokedex() {
  const [value, setValue] = React.useState(0);
  const regions = [
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
        {regions.map((region) => (
          <PokeTab key={region} label={region} />
        ))}
      </PokeTabs>
      {regions.map((region) => (
          <PokePanel key={region} value={value} index={regions.indexOf(region)}>
            {pokemons.map((pokemon) => (
              <PokeBox key={pokemon.id} pokemon={pokemon}/>
            ))}
          </PokePanel>
        ))}
    </Box>
  )
}