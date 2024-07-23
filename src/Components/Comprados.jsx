import React from 'react';
import styles from './Comprados.module.css';
import Done from '../Assets/done-icon.svg?react';
import Redo from '../Assets/redo-icon.svg?react';
import Trash from '../Assets/trash-icon.svg?react';

const Item = ({ item, qtde, comprados, setComprados, setCompras }) => {
  function handleRedo(event) {
    const compraIndex = comprados.findIndex(
      (compra) => compra.item === event.target.id,
    );

    if (compraIndex >= 0) {
      comprados.splice(compraIndex, 1);
      setComprados([...comprados]);

      setCompras((prev) => [...prev, { item, qtde }]);
    }
  }

  function handleTrash(event) {
    const compraIndex = comprados.findIndex(
      (compra) => compra.item === event.target.id,
    );

    if (compraIndex >= 0) {
      comprados.splice(compraIndex, 1);
      setComprados([...comprados]);
    }
  }

  return (
    <li className={styles.listItem}>
      <Done className={styles.done} />
      <div className={styles.item}>
        <p>{item}</p>
        <span>{qtde}</span>
      </div>
      <div className={styles.buttons}>
        <Redo className={styles.redo} onClick={handleRedo} id={item} />
        <Trash className={styles.trash} onClick={handleTrash} id={item} />
      </div>
    </li>
  );
};

export default Item;
