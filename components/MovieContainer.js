import React, { Component } from 'react'
import MovieListe from'./MovieListe'
import Spiner from '../HOC/Spinner'

const SpinerLoading =Spiner(MovieListe)
export default class MovieContainer extends Component {
    state = {
        loading:'',
        
      }
      componentDidMount() {
         this.setState({ loading: false });
        setTimeout(() => {
            this.setState({ loading: true });
        }, 10000);
        
          
    }
    render() {
        return (
            <div>
                 <SpinerLoading isLoading={this.state.loading} />
                
            </div>
        )
    }
}
