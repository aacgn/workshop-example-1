import React from 'react';
import './App.css';
import HelloMessage from './components/HelloMessage';

type AppState = {
  name: string
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    name: 'World'
  };

  onInputChange = (value: string) => {
    this.setState(() => ({
      name: value,
    }));
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          placeholder="Type your name here"
          onChange={ (e) => this.onInputChange(e.target.value)}
        />
        <HelloMessage name={this.state.name}>
        </HelloMessage>
      </div>
    );
  }
}

export default App;
