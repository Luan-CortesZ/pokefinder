import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/fonts/PokemonSolidNormal-xyWR.ttf';
import './views/styles/index.scss'
import App from './views/App.tsx'
import { AuthProvider } from '../components/AuthContext/AuthContext.tsx';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const httpLink = new HttpLink({uri: 'http://localhost:3000/graphql'})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
       <App />
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>,
)
