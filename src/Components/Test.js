
import {useEffect, useState} from 'react'
import axios from 'axios'

function Test() {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://test-api-ob7g.onrender.com').then(movie => {
            return movie.data
        }).then(movie => {
            setData(movie)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return ( 
        <>
            {data.map((movie, index) => {
                return (
                    <div key={index}>{movie.name}</div>
                )
            })}
        </>
     );
}

export default Test;
