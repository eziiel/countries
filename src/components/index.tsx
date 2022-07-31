import React from 'react'

const Countries = () => {
  interface PropsCountry {
    name:string;
    capital:string;
    independent:boolean
  }

  type ArrCountries = PropsCountry[]

  const [country, setCountry] =React.useState(Number)
  const [items, setItems]  = React.useState(Array<ArrCountries>)

  const countries:Array<string> = ["brazil","germany","albania","algeria"]
  const endPoints = "https://restcountries.com/v2/name/"

  React.useEffect(()=>{

      async function data(name:string) {
        let response:PropsCountry[] = await (await fetch(`${endPoints}${name}?fields=name,capital`)).json()
        setItems(previus => [...previus,response])
    }
    countries.map(data)
  },[])

  return (
    <>
    <button
    onClick={() => {
      items.map(([{name}]) => {
        // items.length > 0 && console.log(items[0][0].name)
        console.log(name)
      })
      setCountry(country => country + 1)
      console.log(country)
    }}
    >add</button>
    {items.length > 0 && items.map(([{name,capital}]) => (
      <div key={name}>
        <p>{name}</p>
        <p>{capital}</p>
      </div>
    ))}
    {country > 5 && <p>{items[0][0].name}</p>}
    </>
  )
}

export default Countries