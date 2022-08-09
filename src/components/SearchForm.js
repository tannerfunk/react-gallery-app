import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

 class SearchForm extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        let searchPath = `/${this.state.searchText}`;
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        this.props.history.push(searchPath);
        e.currentTarget.reset();
    }

    render() {
        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmit} >
                    <input type="search"
                                onChange={this.onSearchChange}
                                name="search"
                                ref={(input) => this.query = input}
                                placeholder="Search..." />
                    <button type="submit" id="submit">Go</button>
                </form>
            </div>
        ); 
    }
}

export default withRouter(SearchForm);