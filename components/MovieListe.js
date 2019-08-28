import React, { Component } from 'react'
import MovieCartItem from './MovieCartItem'
import StarRatingComponent from 'react-star-rating-component'
import Spiner from '../HOC/Spinner';


 class MovieListe extends Component {
  constructor(props){
      super(props)
      this.state={
          search:'',
          movies: [
            {title:"avenger",src:"https://source.unsplash.com/random/",rate:"1"},
            {title:"Aladdin",src:"https://source.unsplash.com/random/",rate:"2"},
            {title:"Man in black",src:"https://source.unsplash.com/random/",rate:"3"},
            {title:"The punisher",src:"https://source.unsplash.com/random/",rate:"4"},
            {title:"Lord of the rings",src:"https://source.unsplash.com/random/",rate:"5"},
            {title:"Saw",src:"https://source.unsplash.com/random/",rate:"5"},
            
                    
            ],
            rating: 0
      };
  };
  updateSearch(event){
      this.setState({search:event.target.value})
  };
  addMovie(event){
    event.preventDefault();
    console.log(this)
    let title= this.refs.title.value;
    let src= this.refs.src.value;
    let rate= this.refs.rate.value;
    
    this.setState({
        movies: this.state.movies.concat({title,src,rate})
        
           })
//   movies.concat({title:title,src:src})
 };
 onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  };
    
     render() {
        let { rating } = this.state;
        
         let filteredMovies =this.state.movies.filter((movie)=>{
            return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase() )!== -1
        }
         );
        
        let filterStar=this.state.movies.filter((movie)=>  movie.rate >=rating );
        

    
        return (
            <React.Fragment>  
           
        <input type="text" 
        placeholder="Serch..."
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}></input>
    <div>
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
    </div>
                        
            <section className="movies">
                {(rating>=1)?
            (<div className="movies__slider">
                    
                
                   { filterStar.map((movie, index) =>( 
                          < MovieCartItem titlemovie={movie.title} key={index} srcmovie={movie.src} ratemovie={movie.rate} />
                       
                   )) }
        </div>):
       ( <div className="movies__slider">
                    {filteredMovies.map((movie, index) =>( 
                    < MovieCartItem titlemovie={movie.title} key={index} srcmovie={movie.src} ratemovie={movie.rate} />
                    
                    ))}  
                  
    </div>
              )  }
</section>
<div className="movie">
               <form onSubmit={this.addMovie.bind(this)}>
                <input type="text" ref="title"placeholder="Movie title"/>
                <input type="text" ref="src"placeholder="Image source"/>
                <input type="text" ref="rate"placeholder="rate"/>
                <button type="submit">Add new Movie</button>
                </form> 
                    
                
                </div>
</React.Fragment> 

        )
    }
}

export default  MovieListe;