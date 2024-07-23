import React from 'react';
import './App.css';
import Shop from './Assets/shop-icon.svg?react';
import Done from './Assets/done-icon.svg?react';
import Input from './Components/Input';
import Item from './Components/Item';

function App() {
  // const [itens, setItens] = React.useState([]);
  // const [qtdes, setQtdes] = React.useState([]);

  const [compras, setCompras] = React.useState([]);

  function handleAdd(event) {
    event.preventDefault();
    const item = event.target[0].value;
    const qtde = event.target[1].value;

    const dados = { item, qtde };

    if (item.length > 0) setCompras([...compras, dados]);

    event.target[0].value = '';
    event.target[1].value = '';

    event.target[0].select();
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
        <section className="listContainer">
          <ul className="shopList">
            {compras.length > 0 &&
              compras.map((item, index) => (
                <Item
                  compras={compras}
                  item={item.item}
                  qtde={item.qtde}
                  key={index}
                  setCompras={setCompras}
                  // setItens={setItens}
                  // setQtdes={setQtdes}
                />
              ))}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;
