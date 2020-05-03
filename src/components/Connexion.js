import React, { Component } from "react";

class Connexion extends Component {
    render() {
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input
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