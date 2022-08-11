import itemListContainer from './itemListContainer.css'

function ItemListContainer({greeting}) {
  return (
    <div className="container">
        <h1>{greeting}</h1>
    </div>
  )
}
export {ItemListContainer};