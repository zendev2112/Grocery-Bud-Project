import SingleItem from "./SingleItem"

const Items = ({ items, removeItems }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} removeItem={removeItems} />
      })}
    </div>
  )
}
export default Items
