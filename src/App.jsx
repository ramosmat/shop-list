import React from 'react';
import './App.css';
import Shop from './Assets/shop-icon.svg?react';
import Done from './Assets/done-icon.svg?react';
import Input from './Components/Input';
import Item from './Components/Item';

function App() {
  const [itens, setItens] = React.useState([]);
  const [qtdes, setQtdes] = React.useState([]);

  // const teste = {
  //   frutas: ['banana', 'maça'],
  // };

  // console.log(teste.frutas.map((fruta) => <div>{fruta}</div>));

  function handleAdd(event) {
    event.preventDefault();
    const item = event.target[0].value;
    const qtde = event.target[1].value;

    if (item.length > 0) setItens([...itens, item]);
    if (qtde.length > 0) setQtdes([...qtdes, qtde]);
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
        <section>
          <ul className="shopList">
            {itens.length > 0 &&
              itens.map((item, index) => (
                <Item
                  item={item}
                  key={index}
                  itens={itens}
                  qtdes={qtdes}
                  setItens={setItens}
                  setQtdes={setQtdes}
                />
              ))}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;
