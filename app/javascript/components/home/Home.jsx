import React, { useState } from "react";
import HomeForm from './HomeForm';

const Home = props => {

    const initialFormState = {
        description:''
    };

    const addData = data => {
        const qs = require('qs');
        axios.post('/api/v1/home', qs.stringfy({
            data: {
                description: data.description
            }
        }))
            .then(response => (console.log(response)))
            .catch(error => console.log(error))
    };

    const [data, setData] = useState(props.initialFormState);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(...data, {[name]: value });
    };
    return (
        <section className="section">
        <div className="container mt-5">
            <div className="columns">
                <div className="column">
                    <HomeForm/>
                </div>
                <div className="column">
                    Fourth column
                </div>
            </div>
        </div>
        </section>
    )
}

export default Home;