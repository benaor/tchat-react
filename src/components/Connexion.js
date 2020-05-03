import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = (event) => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ goToChat: true })
    }

    render() {
        if (this.state.goToChat) {
            return <Redirect to={`/pseudo/${this.state.pseudo}`} />
        }


        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        placeholder="pseudo"
                        type="text"
                        required />
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

export default Connexion