import React, { Component } from 'react'
import { Query, gql } from '@apollo/react-components';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Dollar } from '../assets/dollar.svg';

import './Navbar.css';
const queryCategories = gql`
  {
    categories {
      name
    }
  }
`

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-container">
          <ul className="nav-category">
            <Query query={queryCategories}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading</p>;
                if (error) return <p>Error :{`(`}</p>;

                return data.categories.map((category, index) => {
                  return <li key={index} >
                    <p className="nav-category-item">{category.name}</p>
                  </li>
                })
              }}
            </Query>
          </ul>
          <div className="nav-home">
            <Logo />
          </div>
          <div className="nav-right">
            <Dollar />
          </div>
        </nav>
      </div>

    )
  }
}
