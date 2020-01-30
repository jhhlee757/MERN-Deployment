import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const { id } = props;
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skill1, setSkill1] = useState();
    const [skill2, setSkill2] = useState();
    const [skill3, setSkill3] = useState();
    const [errors, setErrors] = useState({});

    const adopt = e => {
        e.preventDefault();
        const editPet = {name, type, description, skill1, skill2, skill3};
        axios.post("http://localhost:8000/api/pets", editPet)
            .then(res=> {
                if(res.data.errors){
                    setErrors(res.data.errors);
                } else {
                    navigate("/pets");
                }
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
    }, [])
    const updatePet = e => {
        e.preventDefault();
        const editPet = {name, type, description, skill1, skill2, skill3};
        axios.put(`http://localhost:8000/api/pets/` + id, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3

        })
            .then(res => {
                if(res.data.errors){
                    setErrors(res.data.errors);
                } else {
                    navigate("/pets/" + id)
                }
            });
    }
    return (
        <div>
            <div className="container">
                <div className="jumbotron" style={{
                    backgroundColor: "SkyBlue"
                }}>
                    <h3>Pet Shelter</h3>
                    <h4>Edit this pet</h4>
                </div>
            </div>
            <form onSubmit={updatePet}>
                <p>
                    <label>Pet name:</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    <span>{errors.name ? errors.name.message: ""}</span>
                </p>
                <p>
                    <label>Pet type:</label><br />
                    <input type="text" 
                    name="type"
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                    <span>{errors.type ? errors.type.message: ""}</span>
                </p>
                <p>
                    <label>Description:</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                    <span>{errors.description ? errors.description.message: ""}</span>
                </p>
                <p>Skills (optional)</p>
                <p>
                    <label>Skill 1:</label><br />
                    <input type="text" 
                    name="skill1"
                    value={skill1} 
                    onChange={(e) => { setSkill1(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 2:</label><br />
                    <input type="text" 
                    name="skill2"
                    value={skill2} 
                    onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 3:</label><br />
                    <input type="text" 
                    name="skill3"
                    value={skill3} 
                    onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <button class="btn btn-primary" type="submit">Edit pet</button>
                &nbsp;
                <Link to="/pets">Cancel</Link>
            </form>
            <br/>
            <Link to={"/pets"}>Home</Link>
        </div>
    )
}