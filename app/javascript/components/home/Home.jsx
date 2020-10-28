import React, {Component, useState} from "react";
import HomeForm from './HomeForm';
import TableList from '../partials/TableList';

class Home extends Component {
    render() {
        return (
            <section className="section">
                <div className="container mt-5">
                    <div className="columns">
                        <div className="column is-centered is-5">
                            <HomeForm/>
                        </div>
                        <div className="column is-7">
                            <TableList/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Home;
