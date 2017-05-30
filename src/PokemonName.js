import React, { Component } from 'react'


class PokemonName extends Component {
     state = {
         poke: {
             name: '',
             id: '',
             weight: '',
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
                <h2>Name: {poke.name}</h2>
                <h3>id: #{poke.id}</h3>
                <h3>weight: {poke.weight} lbs</h3>
                <h3>height: {poke.height} in</h3>
            </div>
        )
    }
}

export default PokemonName

