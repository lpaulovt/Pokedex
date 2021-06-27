import { PokeItem } from './PokeItem';

import styles from '../styles/components/PokeList.module.css'
import { pokeAPI } from '../services/pokeAPI';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';

type Pokemon = {
  entry_number: number,
  pokemon_species: object,
}

type Props = {
  pokelist: Pokemon[];
}

export function PokeList({props}:any){
  console.log(props)

  // async function handlePokeList(){
  //   const response = await pokeAPI.get('pokedex/2');

  //   const pokelist = response.data.pokemon_entries;
  
  //   console.log(pokelist);
  // }
  // useEffect(()=>{
  //   handlePokeList();
  // },[])

  return(
    <div className={styles.contentList}>
      <div className={styles.screen}>
        <section>
          <PokeItem/>
          <PokeItem/>
          <PokeItem/>
          <PokeItem/>
          <PokeItem/>
          <PokeItem/>
          <PokeItem/>
        </section>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await pokeAPI.get('pokedex/2/');

  const {pokemon_entries} = response.data;
  const pokelist = pokemon_entries;

  console.log(response.data)

  return {
    revalidate: 5,
    props: {
      pokelist: response.data
    }
  }
}
