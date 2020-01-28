import React, { useEffect, useState } from 'react'

import PetForm from '../components/PetForm';
import PetList from '../components/PetList';
import Axios from 'axios';
import { Link } from '@reach/router';

export default () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [results, setResults] = useState([]);
    const [order, setOrder] = useState("Ascending");
    useEffect(() =>{
        Axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPet(res.data);
                setLoaded(true);
                setResults(res.data);
            })
            .catch(err=>console.log("Error: ", err))
    }, [])
    const reverseOrder = e => {
        let temp = [...results];
        temp.reverse();
        setResults(temp);
        if(order === "Ascending") {
            setOrder("Descending");
        } else {
            setOrder("Ascending");
        }
    }
    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id != petId));
    }
    return (
        <div>
            <div className="container">
                <div className="jumbotron" style={{
                    backgroundColor: "Dodgerblue"
                }}>
            <h3>Pet Shelter</h3>
            <h4>These pets are looking for a home!</h4>
            </div>
            </div>
            <Link to="/pets/new">Add a pet to the shelter</Link>
            <br/><br/>
            {loaded && <PetList pet={pet} removeFromDom={removeFromDom}/>}
        </div>
    )
}