import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component {
    constructor(props){
        super(props);
        
        this.state = { title : ''};
    }
    
    submitHandler(e) {
      e.preventDefault();
      // how to pass variable to mutation in props
      // muatation return a promise by default
      this.props.mutate({
         variables: {
             title: this.state.title
         }
      }).then(() => hashHistory.push('/'));
      
      
      console.log(this.props);
      
    };
    
    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h1>Create new song</h1>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <label> title </label>
                    <input type="text"
                           onChange={e => this.setState({title : e.target.value})}
                           value={this.state.title}
                    />
                    <h3>{this.state.title}</h3>
                </form>
            </div>
        
        )
    }
}

const mutation = gql `
 mutation AddSong($title : String){
   addSong(title: $title) {
      title
   }
 }
`;


export default graphql(mutation)(SongCreate);