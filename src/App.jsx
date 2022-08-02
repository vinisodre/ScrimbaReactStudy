import React from 'react';
import Block from './components/Block'
import data from './data'
import './App.css';


function App() {

  const block = data.map(item => {
    return (
      <Block
        key={item.id}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}

      />
    )
  })
  return (
    <main>
      {block}
    </main>
  );
}

export default App;
