import React, { Component, useEffect, useState } from 'react'
import Axios from 'axios';
import { Link, navigate } from '@reach/router';




class ThePets extends Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: 0
      };
    }
    vote = e => {
      this.setState({likes: this.state.likes+1});
    }
    render() {
      return (
        <div>
            <p>Likes: {this.state.likes}</p>
            <button class="btn btn-warning"disabled={this.state.likes} onClick={this.vote} id={this.props.petId}>Like this pet</button>
        </div>
      )
    }
}

export default props => {
    const { removeFromDom } = props;
    const deletePet = (petId) => {
        Axios.delete('http://localhost:8000/api/pets/' + petId)
            .then(res => {
                navigate("/pets")
            })
    }
    const [pet, setPet] = useState({})
    useEffect(() => {
        Axios.get("http://localhost:8000/api/pets/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [])
    
    return (
        <div>
            <div className="container">
                <div className="jumbotron" style={{
                    backgroundColor: "SkyBlue"
                }}>
                    <h3>Pet Shelter</h3>
                    <h4>Details about {pet.name}</h4>
                </div>
                <p>Pet type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <p>Skills: 
                    <p>{pet.skill1}</p>
                    <p>{pet.skill2}</p>
                    <p>{pet.skill3}</p>
                </p>
                <ThePets petId={pet.id}/>
                <br/>
                <button class="btn btn-danger" onClick={(e)=>{deletePet(pet._id)}}>Adopt this pet!</button>
                <br/>
                <br/>
            </div>
            <Link to={"/pets"}>Home</Link>
        </div>
    )
}