import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGif = (category) => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const newGifs = await getGifs(category)
    setGifs(newGifs)
    setIsLoading(false)
  }

  return {
    gifs,
    isLoading
  }
}
