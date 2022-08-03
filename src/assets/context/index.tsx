import React, { ReactNode } from "react";


type PropsInitial = {
  countries : string[];
  setCountries : (newState:string[]) => void;
  region:string;
  setRegion: (newState:string) => void;
  regions:string[];
}

const initial = {
  countries : ["brazil","germany","albania","algeria"],
  setCountries : () => {},
  region:"filter by region",
  setRegion: () => {},
  regions : ["filter by region", "Africa", "America","Asia", "Europe","Oceania"]
}

type PropsChildren = {
  children:ReactNode
}


const ContextData = React.createContext<PropsInitial>(initial)

const ContextProvider = ({children}:PropsChildren) => {
  const [countries,setCountries] = React.useState(initial.countries)
  const [region,setRegion] = React.useState(initial.region)
  const regions = initial.regions
   

  React.useEffect(() =>{
    countries[0].trim().length == 0 && setCountries(initial.countries)  

  },[countries])

  const data = {
    countries,
    setCountries,
    region,
    setRegion,
    regions,
  }
  return (
    <ContextData.Provider value={data}>
      {children}
    </ContextData.Provider>
  )
}



export{
  ContextData,
  ContextProvider,
}
