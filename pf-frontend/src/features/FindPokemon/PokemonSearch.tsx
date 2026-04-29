import { Autocomplete, TextField } from '@mui/material';
import type { Pokemon } from '../../models/pokemon.model';
import * as React from 'react';

interface PokemonSearchProps {
  pokemons: Pokemon[];
  onPokemonSelected: (pokemonName: string | null) => void;
  targetPokemonName?: string;
}



export default function PokemonSearch(props: PokemonSearchProps) {
  const { pokemons, onPokemonSelected, targetPokemonName } = props;
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <div>{`pokemon à trouver: '${targetPokemonName ?? ""}'`}</div>
      <br />
      
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
          onPokemonSelected(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={pokemons.map((pokemon) => pokemon.name)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pokemon" />}
      />
    </div>
  );

}
