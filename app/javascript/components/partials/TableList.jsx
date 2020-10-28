import React, { useState, useEffect } from "react";

import axios from 'axios';

const TableList = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/v1/posts.json');
            setData(response.data);
        }

        fetchData();
    });

    return (
        <table className="table is-bordered">
            <thead>
                <tr>
                    <th><abbr title="Position">#No</abbr></th>
                    <th>Passenger</th>
                    <th>Location</th>
                    <th>Destination</th>
                    <th>Timeslot</th>
                    <th><button className="button ">Group</button></th>
                </tr>
            </thead>

            <tbody>
            { data.map( d =>
                <tr key={d.id}>
                    <th>{d.id}</th>
                    <td>{d.passenger}</td>
                    <td>{d.location}</td>
                    <td>{d.destination}</td>
                    <td>{d.timeslot}</td>
                    <td></td>
                </tr>
            )}
            </tbody>
        </table>

    )
}

export default TableList;