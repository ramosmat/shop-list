import React from 'react';
import styles from './Item.module.css';
import Trash from '../Assets/trash-icon.svg?react';

const Item = ({ item, qtde, compras, setCompras, comprados, setComprados }) => {
  function handleTrash(event) {
    const compraIndex = compras.findIndex(
      (compra) => compra.item === event.target.id,
    );

    if (compraIndex >= 0) {
      compras.splice(compraIndex, 1);
      setCompras([...compras]);
      window.localStorage.setItem('compras', JSON.stringify(compras));
    }
  }

  function handleChecked({ target }) {
    const item = target.nextElementSibling.children[0].innerText;
    const qtde = target.nextElementSibling.children[1].innerText;

    const dados = { item, qtde };

    const compraIndex = compras.findIndex((compra) => compra.item === item);
    console.log('compraIndex:', compraIndex);

    if (compraIndex >= 0) {
      compras.splice(compraIndex, 1);
      setCompras([...compras]);
      setComprados([...comprados, dados]);
    }
  }

  React.useEffect(() => {
    window.localStorage.setItem('compras', JSON.stringify(compras));
  }, [compras]);

  React.useEffect(() => {
    window.localStorage.setItem('comprados', JSON.stringify(comprados));
  }, [comprados]);

  return (
    <li className={`${styles.listItem} ${styles.entrou}`}>
      <div onClick={handleChecked} className={styles.check}></div>
      <div className={styles.item}>
        <p>{item}</p>
        <span>{qtde}</span>
      </div>
      <Trash className={styles.trash} onClick={handleTrash} id={item} />
    </li>
  );
};

export default Item;
