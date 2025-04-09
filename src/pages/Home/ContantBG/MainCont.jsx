import "./MainCont.css";
import CarImg from "../../../assets/img/Car-2.png";
import CarImg2 from "../../../assets/img/Car-1.png";

import {ArrowDown} from "./swap/ArrowDown";
import { SwapIcon } from "./swap/SwapIcon";
const MainCont = () => {
  return (
    <section className="MainCont">
      <div className="container">
        <div className="Big__container__Ads">
          <div className="box__Ads1">
            <div className="box__Ads__text2">
              <span className="text__ads">The Best Platform </span>{" "}
              <br className="text__car" />
              <span className="text__ads"> for Car Rental </span>
              <p className="text__par">
                Ease of doing a car rental safely and <br /> reliably. Of course
                at low price
              </p>
              <button className="btn__Click_Rental colorBtn ">
                <a href="">Rental Car</a>
              </button>
            </div>
            <div className="Car__rental__img2">
              <img src={CarImg2} alt="" />
            </div>
          </div>
          
          <div className="box__Ads2">
            <div className="box__Ads__text2">
              <span className="text__ads">Easy way to rent a </span> <br />
              <span className="text__ads">car at a low price </span>
              <p className="text__par">
                Providing cheap car rental services <br /> and safe and
                comfortable facilities,
              </p>
              <button className="btn__Click_Rental ">
                <a href="">Rental Car</a>
              </button>
            </div>
            <div className="Car__rental__img">
              <img src={CarImg} alt="" />
            </div>
          </div>
        </div>

        <div className="Locations__Date__Time">
          <div className="Locations__Date__Time__container">
            <div className="pickup">
              <label className="radio">
                <div className="box__input__rgba">
                  <input className="Input__radio" type="radio" name="pickup" />
                </div>
                <span className="checkmark"> Pick - Up</span>
              </label>
            </div>
            <div className="Location__big__box">

              <div className="Location">
                <div className="Location__box" >
                <span className="Location__text ">Locations</span> <br />
                <span className="Select_text">Select Your city </span>
                <ArrowDown />
                </div>
                <div className="solid">

                </div>
              </div>

              <div className="Location">
                <div className="Location__box" >
                <span className="Location__text ">Locations</span> <br />
                <span className="Select_text">Select Your date </span>
                <ArrowDown />
                </div>
                <div className="solid">

                </div>
              </div>
             
           
              <div className="Location">
                <div className="Location__box">
                <span className="Location__text ">Time</span> <br />
                <span className="Select_text">Select Your time </span>
                <ArrowDown />
                </div>
                <div className="solid_2">

                </div>
              </div>
            </div>
          </div>

          <div className="blue__Button">
            <SwapIcon />
          </div>

          <div className="Locations__Date__Time__container">
            <div className="pickup">
              <label className="radio">
                <div className="box__input__rgba">
                  <input className="Input__radio" type="radio" name="pickup" />
                </div>
                <span className="checkmark"> Drop - Off</span>
              </label>
            </div>
            <div className="Location__big__box">

                  <div className="Location">
                <div className="Location__box">
                <span className="Location__text ">Locations</span> <br />
                <span className="Select_text">Select Your city </span>
                <ArrowDown />
                </div>
                <div className="solid">
                    
                </div>
              </div>

              <div className="Location">
                <div className="Location__box" >
                <span className="Location__text ">Date</span> <br />
                <span className="Select_text">Select Your date </span>
                <ArrowDown />
                </div>
                <div className="solid">

                </div>
              </div>

              <div className="Location">
                <div className="Location__box">
                <span className="Location__text ">Time</span> <br />
                <span className="Select_text">Select Your time </span>
                <ArrowDown />
                </div>
                <div className="solid_2">

                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="Container__Popular">
     <div className="box__text__Popular__Car__View">
      <span className="text__Popular">Popular Car</span>
      <span className="text__View">View All</span>

     </div>
      </div>
      </div>
    </section>
  );
};

export default MainCont;
