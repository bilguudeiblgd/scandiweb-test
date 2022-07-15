import './App.css';
import React, { Component } from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Layout from './Layout';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout/>
      </ApolloProvider>
    )
  }
}


