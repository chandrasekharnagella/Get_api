import React, { useEffect,useState } from 'react'

import axios from 'axios'

export const Data = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/albums").then(
            res=>setData(res.data)
        )

    },[])
  return (
    <div>{data.map(item => <li key={item.id}>{item.title}{item.completed}{item.userId}</li>)}</div>
  )
}
