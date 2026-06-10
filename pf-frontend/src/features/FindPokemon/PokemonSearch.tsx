import { Autocomplete, TextField, Box } from '@mui/material';
import type { Pokemon } from '../../models/pokemon.model';
import * as React from 'react';

interface PokemonSearchProps {
  pokemons: Pokemon[];
  onPokemonSelected: (pokemonName: string | null) => void;
  targetPokemonName?: string;
}



export default function PokemonSearch(props: PokemonSearchProps) {
  const { pokemons, onPokemonSelected } = props;
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 3 }}>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          onPokemonSelected(newValue);
          setValue(null);
          setInputValue('');
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="pokemon-search-autocomplete"
        options={pokemons.map((pokemon) => pokemon.name)}
        sx={{ 
          width: '100%', 
          maxWidth: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          }
        }}
        renderInput={(params) => (
          <TextField {...params} label="Rechercher un Pokémon..." variant="outlined" />
        )}
      />
    </Box>
  );

}
