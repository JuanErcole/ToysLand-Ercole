import Item from '../Item/item'
import datos from '../../assets/datos.json'
import './itemList.css'

const itemListContainer = () => {
  return (
    <div className='itemList'>
      {datos.map((item, index) =>( <Item {...item}/> ))}
    </div>
  )
}

export default itemListContainer