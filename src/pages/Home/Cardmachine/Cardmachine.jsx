
import "./Cardmachine..css";
//img
import CarKoeImg from "../../../assets/img/car-Koenigsegg.jpg";
import CarGTRImg from "../../../assets/img/car-NissanGT-R.jpg";
import CarRolImg from "../../../assets/img/car-RollsRoyce.jpg";
//Icons
import { Refill } from "../../../assets/Icons/Refill";
import { User } from "../../../assets/Icons/User";
import { Car } from "../../../assets/Icons/Car";
import { HeartRed } from "../../../assets/Icons/HeartRed";
import { HeartWhite } from "../../../assets/Icons/Heartwhite";



const Cardmachine = () => {

return(
 <div className="Carts__Catalog">
            <div className="Carts__top__tex__icons">
              <div className="text__Car">
                <span className="text__name__car">Koenigsegg </span> <br />
                <span className="text__sport">Sport</span>
              </div>
              <div className="icons__Heart">
                <HeartRed />
              </div>
            </div>

            <div className="box__img__icons">
              <div className="box__img__car">
                <img src={CarKoeImg} alt="" />
              </div>

              <div className="box__icons__big">
                <div className="icons__Tex">
                  <Refill /> <span className="Number__refill">90L</span>
                </div>
                <div className="icons__Tex">
                  <Car /> <span className="Manual_tex">Manual</span>
                </div>
                <div className="icons__Tex">
                  <User className="abo" />{" "}
                  <span className="People_tex">2 People</span>
                </div>
              </div>
            </div>
            <div className="big__button__day__mani">
              <div className="day__mani">
                <span className="day__mani__99">$99.00/ </span>
                <span className="day__tex">day</span>
              </div>
              <div className="button__rent__Mow">
                <a href="">Rent Now</a>
              </div>
            </div>
          </div>
)

}


export default Cardmachine