import './index.css'

const Card = props => {
  const {data, onDelete} = props
  const {id, imageUrl, name, genre, duration} = data
  const onDeleteCard = () => {
    onDelete(id)
  }
  return (
    <li className="list">
      <div>
        <img src={imageUrl} alt="track" className="imz" />
        <div className="crd">
          <p className="hdl">{name}</p>
          <p className="para">{genre}</p>
        </div>
      </div>
      <div>
        <p>{duration}</p>
        <button
          className="button"
          type="button"
          onClick={onDeleteCard}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default Card
