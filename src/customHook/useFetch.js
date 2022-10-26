import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch(url,{
        headers: {
            "Content-Type": "application/json",
        },
        // mode: "no-cors",
        method: "GET"
    })

    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [url])
  return { loading, data }
}

export default useFetch
