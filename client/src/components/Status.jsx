import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Status = props => {

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
            <Link className="btn btn-info mb-2 mr-2" to="/game/1">Game 1</Link>
            <Link className="btn btn-info mb-2 mr-2" to="/game/2">Game 2</Link>
            <Link className="btn btn-info mb-2" to="/game/3">Game 3</Link>
            <table className="table">
                <thead className="thead-dark text-center">
                <tr>
                    <th scope="col">Player Name</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
            {roster.map( (p, i) => 
                <tr key={p._id} className="text-center">
                    <td>{p.name}</td>
                    <td>
                        <button className="btn btn-success btn-sm ml-2" >PLAYING</button> 
                        <button className="btn btn-danger btn-sm ml-2" >NOT PLAYING</button>
                        <button className="btn btn-warning btn-sm ml-2" >UNDECIDED</button>
                    </td>
                </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Status;