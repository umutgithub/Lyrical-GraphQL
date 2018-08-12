import React, { Component } from 'react';
import gql from 'graphql-tag';    //just to use strings
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map((song,i) => {
            return (
                <li key={i} className="collection-item">{song.title}</li>
            )
        })
    }
    
    render() {
     console.log(this.props.data);
        return (
           this.props.data.loading ?  <div>loading </div> :
           <div>
               <ul className="collection">
                   {this.renderSongs()}
               </ul>
               <Link to="/songs/new"
                  className="btn-floating btn-large red light"
               >
                 <i className="material-icons">add</i>
               </Link>
           </div>
          
      )
    }
    
}

const query = gql`
 {
  songs {
    title
  }
 }
`;


export default graphql(query)(SongList);