import React, { Component } from 'react';
import styled from "styled-components"
import logo from './logo.svg';
import "./App.css"

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Intro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default App;
