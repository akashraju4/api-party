import React, { Component } from 'react'


class PokemonName extends Component {
     state = {
         poke: {
             name: '',
             height: '',
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
                <h2>{poke.name}</h2>
                <h3>height: {poke.height}</h3>
            </div>
        )
    }
}

export default PokemonName

