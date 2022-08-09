import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './css/index.css';

//My App Components

import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

//import API key
import apiKey from './config';

class App extends Component{
  constructor() {
    super()
    this.state = {
        pics: [],
        cats: [],
        dogs: [],
        birds: [],
        query: '',
        loading: true
    };
  }

  componentDidMount() {
    this.performSearch('cats');
    this.performSearch('dogs');
    this.performSearch('birds');
  }
  


  performSearch = ( query = 'snowboarding') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
          if(query === 'cats'){
            this.setState({
              cats: responseData.photos.photo
            });
            console.log(responseData.photos.photo)
          } else if (query === 'dogs'){
            this.setState({
              dogs: responseData.photos.photo
            });
            console.log(responseData.photos.photo)
          } else if (query === 'birds'){
            this.setState({
              birds: responseData.photos.photo
            });
            console.log(responseData.photos.photo)
          } else {
            this.setState({ 
              pics: responseData.photos.photo,
              query: query
             });
             console.log(responseData.photos.photo)
          }
            
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main-nav">
        <h1>Welcome to my gallery app!</h1>
        <SearchForm onSearch={this.performSearch} />
        <Nav /> 
        <Switch>
          <Route exact path="/" render={ () => <PhotoContainer data={this.state.pics}  /> } />
          <Route path="/cats" render={ () => <PhotoContainer data={this.state.cats} />} />
          <Route path="/dogs" render={ () => <PhotoContainer data={this.state.dogs}  />} />
          <Route path="/birds" render={ () => <PhotoContainer data={this.state.birds}  />} />
          <Route path="/:query" render={ () => <PhotoContainer data={this.state.pics} query={this.state.query}  />} />
          <Route exact path="/*" render={() => NotFound } />
        </Switch>
          
          
        
        {/* {
          (this.state.loading)
          ? <p>Loading...</p>
          : ""
        } */}
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
