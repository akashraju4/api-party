import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PokemonName from './PokemonName'
import './Pokemon.css'

class Pokemon extends Component {
    state = {
        name: '',
    }
    handleChange = (ev) => {
        const name = ev.currentTarget.value
        this.setState({ name })
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/pokemon/${this.state.name}`)

    }
    
    render() {
        return (
            <div className="pokemon">
                <div>
                <img className="pokemon-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="github"/>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up a pokemon</button>
                    </div>
                </form>

                <Route exact path="/pokemon" render={() => 
                    <h3>Please enter a pokemon name</h3>} />
                <Route path="/pokemon/:name"  component={PokemonName}/>
            </div>
        )
    }
}

export default Pokemon