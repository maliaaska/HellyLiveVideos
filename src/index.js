import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAnZYyZ23_4bCbXwJUgfj6JWTEAnWrrTZM'; 

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  ); 
} 

ReactDOM.render(<App />, document.querySelector('.container'));
