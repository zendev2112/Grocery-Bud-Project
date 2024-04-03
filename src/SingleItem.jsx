const SingleItem = ( {item, removeItem} ) => {
  return (
    <div className='single-item'>
      <input type="checkbox" />
      <p>{item.name}</p>
      <button className="btn remove-btn" type="button">
        delete
      </button>
    </div>
  )
}
export default SingleItem