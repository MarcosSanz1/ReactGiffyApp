import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/spain'>Gifs de España</Link>
        <Link to='/gif/chile'>Gifs de Chile</Link>
        <Route 
        path='/gif/:keyword' 
        component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;

// Video https://www.youtube.com/watch?v=QBLbXgeXMU8&list=PLW0vQi86zIdDcOMLciTTO3GMNOo_4Pb5E&index=2&t=531s | minuto 1:25:00
// Falta documentar lo de wouter pero que es lo mismo que react-router-dom pero sin dependencias y más "sencillo/directo"