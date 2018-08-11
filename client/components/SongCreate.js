import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


class SongCreate extends Component {
    constructor(props){
        super(props);
        
        this.state = { title : ''};
    }
   
    render() {
        return (
            <div>
                <h1>creat new song</h1>
                <form>
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

export default SongCreate;