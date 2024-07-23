import React from 'react';
import './App.css';
import Shop from './Assets/shop-icon.svg?react';
import Trash from './Assets/trash-icon.svg?react';
import Done from './Assets/done-icon.svg?react';
import Input from './Components/Input';

function App() {
  const [list, setList] = React.useState();

  function handleAdd(event) {
    event.preventDefault();
    console.log(event.target[0]);
    // const item = event.target[0].value;
    // setList((list.item = [...list.item]));
  }

  return (
    <div className="container">
      <section className="mainContainer">
        <div className="title">
          <Shop />
          <h2>Lista de Compras</h2>
          <p>Facilite sua ida ao supermercado!</p>
        </div>
        <form className="form" onSubmit={handleAdd}>
          <Input label="Item" />
          <Input label="Quantidade" />
          <button>+</button>
        </form>
        {list}
      </section>
    </div>
  );
}

export default App;
