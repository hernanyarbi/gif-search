import PropTypes from "prop-types";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGif(category)
  return (
    <>
      <h1>{category}</h1>
      {
        isLoading
          ? (<>cargando...</>)
          : (
            <div className="card-grid">
              {gifs.map(gif => (
                <GifItem key={gif.id} {...gif} />
              ))}
            </div>
          )
      }
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
