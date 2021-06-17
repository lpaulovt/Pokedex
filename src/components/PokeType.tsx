interface PokeTypeProps{
  color: string;
  name: string;
}

export function PokeType({color, name}: PokeTypeProps){
  return(
    <>
      <b style={{background:color, padding: 3, borderRadius: 5, color:'#fff'}}>{name}</b>
      {/* <b style={{background:'#2cc02a', padding: 3, borderRadius: 5, color:'#fff'}}>Grass</b> */}
      {' '}
    </>
  )
}