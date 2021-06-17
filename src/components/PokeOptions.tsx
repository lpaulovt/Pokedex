import styles from '../styles/components/PokeOptions.module.css'

export function PokeOptions(){
  return(
    <div className={styles.contentList}>
      <input className={styles.searchPokemon} type="text" />
    </div>
  );
}