import React, { useEffect } from 'react'  
import { MemoryRouter, useSearchParams } from 'react-router-dom'  
import Home from '../modules/home'  
  
interface RouterWrapperProps {  
  initialRegex?: string  
}  
  
function HomeWithInitialRegex({ initialRegex }: RouterWrapperProps) {  
  const [searchParams, setSearchParams] = useSearchParams()  
    
  useEffect(() => {  
    if (initialRegex && !searchParams.get('r')) {  
      setSearchParams({ r: initialRegex })  
    }  
  }, [initialRegex, searchParams, setSearchParams])  
    
  return <Home />  
}  
  
export function RouterWrapper({ initialRegex }: RouterWrapperProps) {  
  return (  
    <MemoryRouter initialEntries={[initialRegex ? `/?r=${encodeURIComponent(initialRegex)}` : '/']}>  
      <HomeWithInitialRegex initialRegex={initialRegex} />  
    </MemoryRouter>  
  )  
}