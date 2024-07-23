import React from 'react';
import styles from './Item.module.css';
import Trash from '../Assets/trash-icon.svg?react';

const Item = ({ item, qtde, compras, setCompras, setComprados }) => {
  function handleTrash(event) {
    const compraIndex = compras.findIndex(
      (compra) => compra.item === event.target.id,
    );

    if (compraIndex >= 0) {
      compras.splice(compraIndex, 1);
      setCompras([...compras]);
    }
  }

  function handleChecked({ target }) {
    const item = [...target.nextElementSibling.children][0].innerText;
    const qtde = [...target.nextElementSibling.children][1].innerText;

    setComprados((comprados) => [...comprados, { item, qtde }]);

    // FAZER ESSA PARTE FUNCIONAR
    const compraIndex = compras.findIndex(
      (compra) => compra.item === target.id,
    );

    if (compraIndex >= 0) {
      compras.splice(compraIndex, 1);
      setCompras([...compras]);
    }
  }

  return (
    <li className={styles.listItem}>
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
