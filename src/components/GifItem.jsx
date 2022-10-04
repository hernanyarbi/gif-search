
export const GifItem = ({ title, url }) => {
  return (

    <div className="card">
      <img name={title} src={url} />
      <p>{title}</p>
    </div>
  )
}
