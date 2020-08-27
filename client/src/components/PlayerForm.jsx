import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const PlayerForm = props => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState({});

    const CreatePlayer = e => {
        e.preventDefault();
        const playerItem = {name, position};
        axios.post("http://localhost:8000/api/players/addplayer", playerItem)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    return (
        <div className="row">
            <div className="col-sm-6">
                <Link className="btn btn-info" to="/">Back to List</Link>
            </div>
            <h1>Add a New Player:</h1>
            <form className="col-sm-8 offset-sm-2" onSubmit={CreatePlayer}>
                <div className="form-group">
                    <label>Player Name:</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
                    {errors.name ? <p className="text-danger">{errors.name.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Preferred Position:</label>
                    <input className="form-control" onChange={e => setPosition(e.target.value)} />
                    {errors.position ? <p className="text-danger">{errors.position.properties.message}</p>: "" }
                </div>
                <input type="submit" className="btn btn-dark btn-block" value="Add Player" />
            </form>
        </div>
    )
}

export default PlayerForm;