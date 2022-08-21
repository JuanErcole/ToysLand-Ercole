import './HeroContainer.css'

function HeroContainer({greeting}) {
  return (
    <div className="container">
        <h1>{greeting}</h1>
    </div>
  )
}
export {HeroContainer};