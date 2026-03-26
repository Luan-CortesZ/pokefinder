import './styles/Pokedex.scss'
import { Box, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { PokeTab, PokeTabs } from './PokeTabs';
import PokePanel from './PokePanel';
import PokeBox from './PokeBox';
import { PokemonService } from '../../../services/pokemon.service';
import type { Pokemon } from '../../../models/pokemon';

export default function Pokedex() {
  const [value, setValue] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          try {
              const data = await PokemonService.getPokemonsByRegion("1");
              setPokemons(data);
          } catch (err) {
              console.error("Erreur lors du chargement", err);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, ["1"]);
  const itemsPerPage = 50;
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

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

  const scrollPanelToTop = (regionIndex: number) => {
    const panel = document.getElementById(`simple-tabpanel-${regionIndex}`);
    if (panel) panel.scrollTop = 0;
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setPage(1);
    scrollPanelToTop(newValue);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    scrollPanelToTop(value);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PokeTabs
        value={value}
        onChange={handleTabChange}
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

      <PokePanel value={value} index={0}>
        {pokemons.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((pokemon) => (
          <PokeBox key={pokemon.id} pokemon={pokemon} isHidden={true} />
        ))}
      </PokePanel>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          py: 1.5,
          background: 'linear-gradient(180deg, rgba(10, 38, 66, 0.97) 0%, rgba(6, 24, 42, 1) 100%)',
          borderTop: '1px solid rgba(61, 224, 211, 0.15)',
          boxShadow: 'inset 0 0 0 1px rgba(61, 224, 211, 0.08)',
        }}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'rgba(255,255,255,0.6)',
              borderColor: 'rgba(61, 224, 211, 0.18)',
              transition: 'all 0.2s ease',
              '&:hover': {
                background: 'rgba(61, 224, 211, 0.1)',
                borderColor: 'rgba(61, 224, 211, 0.4)',
                color: '#fff',
              },
              '&.Mui-selected': {
                background: 'linear-gradient(135deg, rgba(61, 224, 211, 0.28) 0%, rgba(57, 140, 179, 0.52) 100%)',
                borderColor: 'rgba(61, 224, 211, 0.5)',
                color: '#fff',
                fontWeight: 700,
                boxShadow: '0 0 10px rgba(61, 224, 211, 0.2)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(61, 224, 211, 0.4) 0%, rgba(57, 140, 179, 0.68) 100%)',
                },
              },
            },
          }}
        />
      </Box>
    </Box>
  )
}