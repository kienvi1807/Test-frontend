
import {useEffect, useState} from 'react'
import axios from 'axios'

function Test() {

    const [data, setData] = useState('')
    useEffect(() => {
        axios.get('http://localhost:5000').then(user => {
            return user.data
        }).then(user => {
            setData(user)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return ( 
        <h1>{data}</h1>
     );
}

export default Test;
