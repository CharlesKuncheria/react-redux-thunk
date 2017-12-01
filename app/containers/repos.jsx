import { connect } from 'react-redux'
import React, { Component } from 'react'
import { fetchRepos, fetchReposLocal } from '../actions'

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
        this.props.dispatch(fetchReposLocal());
        //this.props.dispatch(fetchRepos(user));
    }

    render() {
        return (
            <div>
                <header>
                    <form onSubmit={ this.handleSubmit } >
                        <input ref={(input) => { this.textInput = input }} type="text"/>
                        <input type="submit" value="Submit" />
                    </form>
                </header>
                <div id="main">
                    {
                            this.props.repos.map((r) => {
                            return <div key={r.id}>{r.name}</div>;
                        })
                    }
                </div>
                <footer>
                    <div>{`${this.props.status}`}</div>
                </footer>
            </div>
        )
    }
}

let ReposContainer = connect(mapStateToProps)(Repos);

export default ReposContainer;
