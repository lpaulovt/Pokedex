import { PokeItem } from './PokeItem';

import styles from '../styles/components/PokeList.module.css'

export function PokeList(){
  return(
    <div className={styles.contentList}>
      <div className={styles.screen}>
        <PokeItem/>
        <PokeItem/>
      </div>
    </div>
  );
}