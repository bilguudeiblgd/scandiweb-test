import React, { Component } from 'react'
import { useQuery, gql } from '@apollo/client';
import { client } from './App';
import './Layout.css';
import Navbar from './components/Navbar';

const getCategory = {
    query: gql`
        {
            categories {
                name
            }
        }
`}

export default class Layout extends Component {

    componentDidMount() {
        console.log("layout mounted");
        client.query(getCategory).then(result => console.log(result))
            .catch((err) => {
                console.log(JSON.stringify(err, null, 2));
            })
    }
    render() {
        return (
            <div className="container">
                <Navbar />
                <div>
                    <h2>Category name</h2>
                </div>
            </div>
        )
    }
}
