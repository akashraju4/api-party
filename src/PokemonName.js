import React, { Component } from 'react'
import './PokemonName.css'


class PokemonName extends Component {
     state = {
         poke: {
             name: '',
             id: '',
             weight: '',
             height: '',
             base_experience: ''


         }
     }
     constructor(props) {
        super(props)
        this.fetchUserData(props)
    }

    fetchUserData(props) {
        fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
            .then(response => response.json())
            .then(poke => this.setState({ poke }))
    }
    componentWillReceiveProps(nextProps) {
        const locationChanged = (nextProps.location !== this.props.location)
        if (locationChanged) {
            this.fetchUserData(nextProps)
        }
    }
    render() {
        const { poke } = this.state
        return (
            <div className="poke-name">
                <h1 className="intro">
                    <img className="ball" src="https://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" alt=""/>
                    Name: {poke.name}
                    <img className="ball" src="https://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" alt=""/>
                </h1>
                <h3 className="id">id: #{poke.id}</h3>
                <h3>weight: {poke.weight} lbs</h3>
                <h3>height: {poke.height} in</h3>
                <h3>base experience: {poke.base_experience}</h3>

            </div>
        )
    }
}

export default PokemonName

