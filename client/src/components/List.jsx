import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const List = props => {

    const [roster, setRoster] = useState([]);

    const fetchPlayers = () => {
        axios.get("http://localhost:8000/api/players/list")
            .then(res => {
                console.log(res);
                setRoster(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect( () => {
        fetchPlayers();
    }, []);

    const remove = _id => {
        // console.log(_id);
        axios.delete(`http://localhost:8000/api/players/${_id}`)
        .then(res => {
            console.log(res);
            fetchPlayers();
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Link className="btn btn-info mb-2" to="/addplayer">Add Player</Link>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Player Name</th>
                    <th scope="col">Preferred Position</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
            {roster.map( (p, i) => 
                <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.position}</td>
                    <td><button className="btn btn-outline-danger btn-sm" onClick={e => remove(p._id)}>DELETE</button></td>
                </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List;