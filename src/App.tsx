import React from 'react';
import './App.css';

//Components
import Section from './components/Section/Section';
import Button from './components/Button/Button';

function App() {
  return (
    <div className='App'>
      <Button label='Click me' color='primary' />
      <Button label='Click me' color='secondary' />
      <Section title='Section is me'>
        <ul>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
