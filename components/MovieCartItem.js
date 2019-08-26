import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'


class MovieCartItem extends Component {

    getImage(path) {
        return(
            <img src={path}></img>
        )
    }
    getrate (rate){
        return(
            rate=rate
        )
    }
    render() {
        
            return (
                <div className="movie">
                
                    <div className="movie__image">
                        {this.getImage(this.props.srcmovie)}
                    </div>
                    <div className="movie__desc">
                        {this.props.titlemovie}
                        <StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={5}
          value={this.getrate(this.props.ratemovie)}
        />

                    </div>
                
                </div>
            )
        
    }

}
export default MovieCartItem;