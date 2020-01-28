import React, { useEffect, useState } from 'react'

import PetForm from '../components/PetForm';
import PetList from '../components/PetList';
import Axios from 'axios';
import { Link } from '@reach/router';

export default () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() =>{
        Axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPet(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    }, [])
    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id != petId));
    }
    return (
        <div className="container">
            <div className="jumbotron" style={{
                backgroundColor: "Dodgerblue"
            }}>
                <h3>Pet Shelter</h3>
                <h4>Know of a pet needing a home?</h4>
            </div>
                <PetForm/>
            
            
        </div>
    )
}