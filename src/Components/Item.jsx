import React from 'react';
import styles from './Item.module.css';
import Trash from '../Assets/trash-icon.svg?react';

const Item = ({ item, itens, qtdes, setItens, setQtdes }) => {
  function handleClick(event) {
    const compraIndex = itens.indexOf(event.target.id);

    itens.splice(compraIndex, 1);
    setItens([...itens]);
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.check}></div>
      <div className={styles.item}>
        <p>{item}</p>
        <span>teste</span>
      </div>
      <Trash className={styles.trash} onClick={handleClick} id={item} />
    </li>
  );
};

export default Item;
