import { PokeType } from './PokeType';

import styles from '../styles/components/PokeItem.module.css';

export function PokeItem(){
  return(
    <div className={styles.pokeContainer}>
      <div>
      <h1>#001</h1>
      <h1>Bulbasaur</h1>
      <span>
        <PokeType/>
        <b style={{background:'#a240a0', padding: 3, borderRadius: 5, color:'#fff'}}>Poison</b>
      </span>
      </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon" />
    </div>
  );
}