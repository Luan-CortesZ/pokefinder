import './styles/Pokedex.scss'
import { Box, Pagination } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react';
import { PokeTab, PokeTabs } from './PokeTabs';
import PokePanel from './PokePanel';
import PokeBox from './PokeBox';
import { PokemonService } from '../../../services/pokemon.service';
import type { CapturedPokemon, Pokemon } from '../../../models/pokemon.model';
import { UserService } from '../../../services/user.service';
import { useAuth, useAuthenticatedUser } from '../../../components/AuthContext/AuthContext';

export default function Pokedex() {
  const [region, setRegion] = useState(0);
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [userPokemons, setUserPokemons] = useState<CapturedPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const user = useAuthenticatedUser()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await UserService.getUsersPokemon(user._id);
        setUserPokemons(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Erreur lors du chargement", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user._id])

  useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          try {
              const data = await PokemonService.getPokemonsByRegion((region + 1));
              setPokemons(data);
          } catch (err) {
              console.error("Erreur lors du chargement", err);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, [region]);
  const itemsPerPage = 30;
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
    setRegion(newValue);
    setPage(1);
    scrollPanelToTop(newValue);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    scrollPanelToTop(region);
  };

  return (
    <Box sx={{ 
      height: '100%', 
      display: 'flex',
      flexDirection: 'column', 
      overflow: 'hidden',
      }}>
      <PokeTabs
        value={region}
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

      <Box sx={{ flex: 1, overflowY: 'auto', minHeight: 0, background: 'radial-gradient(ellipse at top, #0a3a5c 0%, #001e3c 100%)' }}>
        <PokePanel value={region} index={region}>
          {pokemons.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((pokemon) => (
            <PokeBox key={pokemon.id} pokemon={pokemon} captured={userPokemons?.find((p) => p.pokemonId === pokemon.id)} />
          ))}
        </PokePanel>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          py: 1.5,
          background: 'linear-gradient(180deg, rgba(10, 38, 66, 0.97) 0%, rgba(6, 24, 42, 1) 100%)',
          borderTop: '1px solid rgba(61, 224, 211, 0.15)',
          boxShadow: 'inset 0 0 0 1px rgba(61, 224, 211, 0.08)',
          zIndex: 10,
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