import styles from '../styles/components/PokeOptions.module.css'

const types = [
  {
    imageType: '/types/bug.svg',
    color: '#9cb820'
  },
  {
    imageType: '/types/dark.svg',
    color: '#504843'
  },
  {
    imageType: '/types/dragon.svg',
    color: '#7038f8'
  },
  {
    imageType: '/types/electric.svg',
    color: '#c09643'
  },
  {
    imageType: '/types/fairy.svg',
    color: '#f09ad9'
  },
  {
    imageType: '/types/fighting.svg',
    color: '#c03028'
  },
  {
    imageType: '/types/fire.svg',
    color: '#f08030'
  },
  {
    imageType: '/types/flying.svg',
    color: '#9096f0'
  },
  {
    imageType: '/types/ghost.svg',
    color: '#705898'
  },
  {
    imageType: '/types/grass.svg',
    color: '#22c02a'
  },
  {
    imageType: '/types/ground.svg',
    color: '#e0b668'
  },
  {
    imageType: '/types/ice.svg',
    color: '#98d8d8'
  },
  {
    imageType: '/types/normal.svg',
    color: '#a8a8a8'
  },
  {
    imageType: '/types/poison.svg',
    color: '#a040a0'
  },
  {
    imageType: '/types/psychic.svg',
    color: '#eb2d77'
  },
  {
    imageType: '/types/rock.svg',
    color: '#b8a038'
  },
  {
    imageType: '/types/steel.svg',
    color: '#6d8f9c'
  },
  {
    imageType: '/types/water.svg',
    color: '#6890f0'
  },
]

export function PokeOptions(){
  return(
    <div className={styles.contentList}>
      <input className={styles.searchPokemon} type="text" />
      <div className={styles.containerTypes}>
        {types.map(type => {
          return(
            <button key={type.imageType} style={{background: type.color}}><img src={type.imageType} alt="bug"/></button>
          )
        })}
      </div>
    </div>
  );
}