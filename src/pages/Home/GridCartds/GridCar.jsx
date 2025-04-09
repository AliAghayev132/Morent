// css
import "./Grid.css"

//Cars
import Gridcontainer from "./Gridcontainer/Gridcontainer"

const  GridCar = () => {
  return (
    <section className="Grid">
      <div className="container" >
        <div className="container__Grid">
<Gridcontainer/>
                
 <div className="Show__container">
   <div className="Show">
   <div className="button_Show"><a href="">Show more car</a></div>
   <span className="car__120">120 car</span>
   </div>
 </div>
        </div>
      </div>
    </section>
  )
}

export default GridCar