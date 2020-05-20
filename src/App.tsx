import React, { useState } from 'react';
import './App.css';

//Components
import Section from './components/Section/Section';
import Button from './components/Button/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Button
        label='Increase'
        color='primary'
        onClick={() => {
          setCount(count + 1);
          console.log('ahihi');
        }}
      />
      <Button label='Click me' color='secondary' />
      <Section title='Section is me'>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Section>
      <Section title='Counter'>
        <div>{count}</div>
      </Section>
    </div>
  );
}

export default App;
