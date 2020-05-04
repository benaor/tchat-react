import React, { Component } from "react";

class Formulaire extends Component {
    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        //Reset du formulaire
        this.setState({ message: ' ', length })
    }

    handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.createMessage()
    }

    handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            this.createMessage()
        }
    }

    render() {

        return (
            <form
                onSubmit={this.handleSubmit}
                className="form">
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                    required
                    maxLength={this.props.length}
                    onKeyUp={this.handleKeyUp}
                />
                <div className="info" >
                    {this.state.length}
                </div>
                <button type="submit" >
                    Envoyer !
                  </button>
            </form>
        )

    }
}

export default Formulaire