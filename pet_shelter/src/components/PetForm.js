import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const adopt = e => {
        e.preventDefault();
        const newPet = {name, type, description, skill1, skill2, skill3};
        axios.post("http://localhost:8000/api/pets", newPet)
            .then(res=> {
                if(res.data.errors){
                    setErrors(res.data.errors);
                } else {
                    navigate("/pets");
                }
            })
            .catch(err => console.log(err));
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res=>{
                console.log("Response: ", res);
                navigate("/pets");
                })
            .catch(err=>console.log("Error: ", err))
    }
    return(
        <form onSubmit={adopt}>
            <p>
                <label>Pet name: </label>
                &nbsp;
                <input type="text" onChange={e=>setName(e.target.value)}/>
                <span>{errors.name ? errors.name.message: ""}</span>
            </p>
            <p>
                <label>Pet type: </label>
                &nbsp;
                <input type="text" onChange={e=>setType(e.target.value)}/>
                <span>{errors.type ? errors.type.message: ""}</span>
            </p>
            <p>
                <label>Description: </label>
                &nbsp;
                <input type="text" onChange={e=>setDescription(e.target.value)}/>
                <span>{errors.description ? errors.description.message: ""}</span>
            </p>
            <p>Skills:</p>
            <p>
                <label>Skill 1: </label>
                &nbsp;
                <input type="text" onChange={e=>setSkill1(e.target.value)}/>
            </p>
            <p>
                <label>Skill 2: </label>
                &nbsp;
                <input type="text" onChange={e=>setSkill2(e.target.value)}/>
            </p>
            <p>
                <label>Skill 3: </label>
                &nbsp;
                <input type="text" onChange={e=>setSkill3(e.target.value)}/>
            </p>
            <button class="btn btn-primary" type="submit">Add pet</button>
            &nbsp;
            <Link to="/pets">Cancel</Link>
        </form>
    )
}