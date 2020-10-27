import React, {Component, useState} from "react";
import HomeForm from './HomeForm';


class Home extends Component {
    render() {
        return (
            <section className="section">
                <div className="container mt-5">
                    <div className="columns">
                        <div className="column is-centered">
                            <HomeForm/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Home;
