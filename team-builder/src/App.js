import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/form";
import Card from "./components/card";

function App() {
  const [cards, setCards] = useState([]);
  const [cardToEdit, setCardToEdit] = useState();
console.log(cardToEdit)
  function addCard(newCard) {
    setCards([...cards, newCard]);
  } 

  function edit(e) {
    console.log(e.target)
    setCardToEdit(cards[e.target.id])
  }

  return (
    <div className="App">
      <Form
        cards={cards}
        submit={addCard}
        cardToEdit={cardToEdit}
      />
      <Card 
        cards={cards} 
        edit={edit}
      />
    </div>
  );
}

export default App;
