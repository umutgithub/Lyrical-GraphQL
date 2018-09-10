import React, { Component } from 'react';
import gql from 'graphql-tag';    //just to use strings
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
    
    onSongDelete(id) {
        this.props.mutate({ variables: { id: id } });
        
    }
    
    renderSongs() {
        return this.props.data.songs.map(({ id, title }) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i className="material-icons" onClick={() => this.onSongDelete(id)}>
                        delete
                    </i>
                </li>
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

const mutation = gql`
 mutation DeleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}
`;

export default graphql(mutation)(
    graphql(query)(SongList)
);