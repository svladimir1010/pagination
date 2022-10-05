import { useEffect, useState } from 'react'
import './App.css'
import Images from './components/Images'

function App() {

    const [ images, setImages ] = useState( [] )
    useEffect( () => {
        fetch( 'https://jsonplaceholder.typicode.com/photos?_limit=1000' )
            .then( response => response.json() )
            .then( data => setImages( data ) )
    }, [] )

    return (
        <>
            <Images data={ images } itemsPerPage={6}/>
        </>
    )
}

export default App
