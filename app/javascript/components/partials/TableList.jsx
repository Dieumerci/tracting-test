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
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th><abbr title="Position">#No</abbr></th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
            { data.map( d =>
                <tr key={d.id}>
                    <th>{d.id}</th>
                    <td>{d.description}</td>
                </tr>
            )}
            </tbody>
        </table>

    )
}

export default TableList;