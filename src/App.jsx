import React from 'react';
import './App.css';
import Shop from './Assets/shop-icon.svg?react';
import Input from './Components/Input';
import Item from './Components/Item';
import Comprados from './Components/Comprados';

function App() {
  const [compras, setCompras] = React.useState([]);
  const [comprados, setComprados] = React.useState([]);

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
          <Shop className="shopSvg" />
          <h2>Lista de Compras</h2>
          <p>Facilite sua ida ao supermercado!</p>
        </div>
        <form className="form" onSubmit={handleAdd}>
          <Input label="Item" />
          <Input label="Quantidade" />
          <button>+</button>
        </form>
        <section className="listContainer">
          <ul id="shopList" className="shopList">
            {compras.length > 0 &&
              compras.map((item, index) => (
                <Item
                  id={index}
                  compras={compras}
                  setCompras={setCompras}
                  item={item.item}
                  qtde={item.qtde}
                  key={index}
                  setComprados={setComprados}
                />
              ))}
          </ul>
        </section>
        <section className="listComprados">
          <ul className="shopList">
            {comprados.length > 0 && (
              <>
                <h2>Itens já Comprados</h2>
                {comprados.map((item, index) => (
                  <Comprados
                    item={item.item}
                    qtde={item.qtde}
                    key={index}
                    comprados={comprados}
                    setComprados={setComprados}
                    setCompras={setCompras}
                  />
                ))}
              </>
            )}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;
