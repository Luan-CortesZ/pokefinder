import './styles/Pokedex.scss'
import { Box, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { PokeTab, PokeTabs } from './PokeTabs';
import PokePanel from './PokePanel';
import PokeBox from './PokeBox';
import { PokemonService } from '../../../services/pokemon.service';
import type { CapturedPokemon, Pokemon } from '../../../models/pokemon.model';
import { UserService } from '../../../services/user.service';
import { useAuthenticatedUser } from '../../../components/AuthContext/AuthContext';
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          py: 1.5,
          background: 'rgb(28, 100, 162)',
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
              borderColor: 'rgba(61, 224, 224, 0.18)',
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: 'rgba(61, 170, 224, 0.4)',
                background: 'rgba(28, 117, 173, 0.61)',
                color: '#fff',
              },
              '&.Mui-selected': {
                background: 'rgb(57, 165, 215)',
                color: '#fff',
                fontWeight: 700,
                '&:hover': {
                  background: 'rgb(41, 130, 170)'
                },
              },
            },
          }}
        />
      </Box>

      <Box sx={{ 
        flex: 1, 
        overflowY: 'auto', 
        minHeight: 0, 
        backgroundImage: 'radial-gradient(circle, #4a90e2 0%, #357abd 100%)',
        backgroundSize: '150px',
        backgroundRepeat: 'repeat',
        p: 3 
      }}>
        <PokePanel value={region} index={region}>
          {pokemons.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((pokemon) => (
            <PokeBox key={pokemon.id} pokemon={pokemon} captured={userPokemons?.find((p) => p.pokemonId === pokemon.id)} />
          ))}
        </PokePanel>
      </Box>

      
    </Box>
  )
}