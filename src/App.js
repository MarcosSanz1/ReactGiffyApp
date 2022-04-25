import React, { useEffect, useState } from 'react';
import './App.css';
import Gif from './components/Gif';
import getGifs from './services/getGifs';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'rick' }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(({id, title, url}) => 
            <Gif 
              key={id}
              id={id}
              title={title} 
              url={url} 
              
            />
          )
        }
      </section>
    </div>
  );
}

export default App;

// Video https://www.youtube.com/watch?v=QBLbXgeXMU8&list=PLW0vQi86zIdDcOMLciTTO3GMNOo_4Pb5E&index=2&t=531s | minuto 55:00