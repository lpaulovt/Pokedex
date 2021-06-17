import { PokeType } from './PokeType';

import styles from '../styles/components/PokeItem.module.css';

export function PokeItem(){
  return(
    <div className={styles.pokeContainer}>
      <div className={styles.pokeInfo}>
      <header>
        <h1>Bulbasaur</h1>
        <h1>#001</h1>
      </header>
      <strong>Peso: 69KG</strong>
      <span>
        <PokeType color="#2cc02a" name="Grass"/>
        <PokeType color="#a240a0" name="Poison"/>
      </span>
      </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon" />
    </div>
  );
}