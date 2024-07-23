import React from 'react';
import styles from './Item.module.css';
import Trash from '../Assets/trash-icon.svg?react';

const Item = ({ item, qtde, compras, setCompras }) => {
  function handleClick(event) {
    // const compraIndex = compras.indexOf(event.target.id);

    const compraIndex = compras.findIndex(
      (compra) => compra.item === event.target.id,
    );

    if (compraIndex >= 0) {
      compras.splice(compraIndex, 1);
      setCompras([...compras]);
    }
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.check}></div>
      <div className={styles.item}>
        <p>{item}</p>
        <span>{qtde}</span>
      </div>
      <Trash className={styles.trash} onClick={handleClick} id={item} />
    </li>
  );
};

export default Item;
