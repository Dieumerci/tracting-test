import React, { useState } from "react";
import HomeForm from './HomeForm';
import axios from 'axios';
import TableList from '../partials/TableList';

const Home = props => {

    const initialFormState = {
        file:''
    };

    const addPost = post => {
        const qs = require('qs');
        const url = "/api/v1/posts/";
        const token = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token
        axios.post(url, qs.stringify(
            {
                        post: {
                            file: post.file
                        }
                    }
                    ))
                    .then(response => (console.log(response)))
                    .catch(error => console.log(error))


    };

    return (
        <section className="section">
        <div className="container mt-5">
            <div className="columns">
                <div className="column is-centered">
                    <HomeForm addPost={addPost} initialFormState={initialFormState}/>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Home;