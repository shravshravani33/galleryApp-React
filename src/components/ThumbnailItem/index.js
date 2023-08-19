import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onThumbnailClick} = props
  const {thumbnailAltText, thumbnailUrl, id} = imageDetails

  const onThumbnail = () => {
    onThumbnailClick(id)
  }

  return (
    <div>
      <li className="li-decor">
        <button type="button" onClick={onThumbnail}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-decor"
          />
        </button>
      </li>
    </div>
  )
}

export default ThumbnailItem
