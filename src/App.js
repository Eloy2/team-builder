import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import List from './components/List';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Baloo+Da+2&display=swap');
  body {
    font-family: 'Baloo Da 2', cursive;
  }
`

const Member = styled.div`
  border-radius: 15px;
  border: 2px solid black;
  padding: 0 3%;
  background-color: white;
  color: #282c34;
`

function App() {
  const [listState, setListState] = useState([{
    id: 1,
    name: "Eloy",
    email: "eloy@gmail.com",
    role: "Team Lead"
  }]);

  // ADD TO STATE HANDLER
  const addMemberHandler = newMember => {
    setListState([...listState, newMember]);
  }

  return (
    <div className="App-header">
      <GlobalStyles/>
      <h1>Sign up to join the Team</h1>
      <Form addMember={addMemberHandler}/>
      <List members={listState}/>
    </div>
  );
}

export default App;
