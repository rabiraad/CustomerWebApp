import React, { Component } from 'react'

class ErrorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
        this.okHandler = this.okHandler.bind(this);
    }

    okHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <br></br>
                <div>The input parameters are invalid</div>
                <div className="row">
                    <button className="btn btn-success" onClick={this.okHandler}>Ok</button>
                </div>
            </div>
        )
    }
}

export default ErrorComponent