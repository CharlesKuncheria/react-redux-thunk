import { connect } from 'react-redux'
import React, { Component } from 'react'
import { fetchRepos } from '../actions'

var mapStateToProps = (state) => {
    return {
        repos: state.repos,
        status: state.status
    }
}

class Repos extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        //this.props.dispatch(fetchRepos());
    }

    handleSubmit(e) {
        e.preventDefault();
        var user = this.textInput.value;
        this.props.dispatch(fetchRepos(user));
    }

    render() {
        return (
            <section> 
                <section>
                <form onSubmit={ this.handleSubmit } >
                    <label>
                        Name:
                        <input ref={(input) => { this.textInput = input }} type="text"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                </section>
                {this.props.repos.map((r) => {
                    return <div>{r.name}</div>;
                })}
                <div>{`Current status: ${this.props.status}`}</div>
            </section>
        )
    }
}

let ReposContainer = connect(mapStateToProps)(Repos);

export default ReposContainer;
