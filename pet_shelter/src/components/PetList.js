import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetList from '../components/PetList';
import { Link } from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const [loaded, setLoaded] = useState(false);
    const [results, setResults] = useState([]);
    const [order, setOrder] = useState("Ascending");
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pets/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
    }
    const [pet, setPet] = useState({});
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
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [])
    return (
        <div>
            {props.pet.map((pet, index)=>{
                return(
                    <div class="container">
                        <table class="table table-sm table-striped table-bordered">
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                            <tr key={pet._id}>
                                <td>
                                    {pet.name}
                                    {/* {loaded && <PetList pet={pet} removeFromDom={removeFromDom}/>} */}
                                </td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={"/pets/" + pet._id}>Details</Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to={"/pets/" + pet._id + "/edit"}>Edit</Link>
                                </td>
                            </tr>
                
                        </table>
                        <br/>
                        {/* <p>
                            {pet.name}
                            &nbsp;
                            <button onClick={(e)=>{deletePet(pet._id)}}>Delete</button>
                        </p> */}
                    </div>
                )  
            })}
        </div>
    )
} 