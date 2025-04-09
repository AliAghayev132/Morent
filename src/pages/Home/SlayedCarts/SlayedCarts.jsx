
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Импорт стилей Swiper
import "swiper/css";

// Css
import "./SlayedCarts.css";
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

const SlayedCarts = () => {
  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255)",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
   
  };

  return (
    <section className="SlayedCarts">
      <div className="container">
        <div className="swiper_box_cards">
        

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20} // Промежуток между карточками
            autoplay={{
              delay: 2500, // Задержка между переходами
              disableOnInteraction: false, // Автопрокрутка не будет отключена после взаимодействия
            }}
            breakpoints={{
              1150: {
                slidesPerView: 4, // 4 карточки для экранов шире 1150 пикселей
              },
              800: {
                slidesPerView: 3, // 3 карточки для экранов от 850 до 1150 пикселей
              },
              450: {
                slidesPerView: 2, // 2 карточки для экранов от 400 до 850 пикселей
              },
              280: {
                slidesPerView: 1, // 1 карточка для экранов шире 280 пикселей
              },
            }}
            style={{ width: "100%", padding: "20px" }} // Установить ширину для Swiper
          >
            <SwiperSlide style={cardStyle}>   
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
            </SwiperSlide>

            <SwiperSlide style={cardStyle}>
              <div className="Carts__Catalog">
            <div className="Carts__top__tex__icons">
              <div className="text__Car">
                <span className="text__name__car">Nissan GT-R </span> <br />
                <span className="text__sport">Sport</span>
              </div>
              <div className="icons__Heart">
                <HeartWhite />
              </div>
            </div>

            <div className="box__img__icons">
              <div className="box__img__car">
                <img src={CarGTRImg} alt="" />
              </div>

              <div className="box__icons__big">
                <div className="icons__Tex">
                  <Refill /> <span className="Number__refill">80L</span>
                </div>
                <div className="icons__Tex">
                  <Car /> <span className="Manual_tex">Manual</span>
                </div>
                <div className="icons__Tex">
                  <User className="abo" />
                  <span className="People_tex">2 People</span>
                </div>
              </div>
            </div>
            <div className="big__button__day__mani">
              <div className="day__mani">
                <span className="day__mani__99">$80.00/ </span>
                <span className="day__tex">day</span>
                <p className="day__mani__100">$100.00</p>
              </div>
              <div className="button__rent__Mow">
                <a href="">Rent Now</a>
              </div>
            </div>
          </div>
            </SwiperSlide>

            <SwiperSlide style={cardStyle}> 
              <div className="Carts__Catalog">
            <div className="Carts__top__tex__icons">
              <div className="text__Car">
                <span className="text__name__car">Rolls-Royce </span> <br />
                <span className="text__sport">Sedan</span>
              </div>
              <div className="icons__Heart">
                <HeartRed />
              </div>
            </div>

            <div className="box__img__icons">
              <div className="box__img__car">
                <img src={CarRolImg} alt="" />
              </div>

              <div className="box__icons__big">
                <div className="icons__Tex">
                  <Refill /> <span className="Number__refill">70L</span>
                </div>
                <div className="icons__Tex">
                  <Car /> <span className="Manual_tex">Manual</span>
                </div>
                <div className="icons__Tex">
                  <User className="abo" />{" "}
                  <span className="People_tex">4 People</span>
                </div>
              </div>
            </div>
            <div className="big__button__day__mani">
              <div className="day__mani">
                <span className="day__mani__99">$96.00/ </span>
                <span className="day__tex">day</span>
              </div>
              <div className="button__rent__Mow">
                <a href="">Rent Now</a>
              </div>
            </div>
          </div>
            
            </SwiperSlide>

            <SwiperSlide style={cardStyle}>
              <div className="Carts__Catalog">
            <div className="Carts__top__tex__icons">
              <div className="text__Car">
                <span className="text__name__car">Nissan Gt-R</span> <br />
                <span className="text__sport">Sport</span>
              </div>
              <div className="icons__Heart">
                <HeartWhite />
              </div>
            </div>

            <div className="box__img__icons">
              <div className="box__img__car">
                <img src={CarGTRImg} alt="" />
              </div>

              <div className="box__icons__big">
                <div className="icons__Tex">
                  <Refill /> <span className="Number__refill">80L</span>
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
                <span className="day__mani__99">$80.00/ </span>
                <span className="day__tex">day</span>
                <p className="day__mani__100">$100.00</p>
              </div>
              <div className="button__rent__Mow">
                <a href="">Rent Now</a>
              </div>
            </div>
          </div>
            </SwiperSlide>

            <SwiperSlide style={cardStyle}>   
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
                  <User className="abo" />
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
            </SwiperSlide>

            <SwiperSlide style={cardStyle}>
              <div className="Carts__Catalog">
            <div className="Carts__top__tex__icons">
              <div className="text__Car">
                <span className="text__name__car">Nissan Gt-R </span> <br />
                <span className="text__sport">Sport</span>
              </div>
              <div className="icons__Heart">
                <HeartWhite />
              </div>
            </div>

            <div className="box__img__icons">
              <div className="box__img__car">
                <img src={CarGTRImg} alt="" />
              </div>

              <div className="box__icons__big">
                <div className="icons__Tex">
                  <Refill /> <span className="Number__refill">80L</span>
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
                <span className="day__mani__99">$80.00/ </span>
                <span className="day__tex">day</span>
                <p className="day__mani__100">$100.00</p>
              </div>
              <div className="button__rent__Mow">
                <a href="">Rent Now</a>
              </div>
            </div>
          </div>
            </SwiperSlide>

            <SwiperSlide style={cardStyle}> 
              <div className="Carts__Catalog">
            <div className="Carts__top__tex__icons">
              <div className="text__Car">
                <span className="text__name__car">Rolls-Royce </span> <br />
                <span className="text__sport">Sedan</span>
              </div>
              <div className="icons__Heart">
                <HeartRed />
              </div>
            </div>

            <div className="box__img__icons">
              <div className="box__img__car">
                <img src={CarRolImg} alt="" />
              </div>

              <div className="box__icons__big">
                <div className="icons__Tex">
                  <Refill /> <span className="Number__refill">70L</span>
                </div>
                <div className="icons__Tex">
                  <Car /> <span className="Manual_tex">Manual</span>
                </div>
                <div className="icons__Tex">
                  <User className="abo" />
                  <span className="People_tex">4 People</span>
                </div>
              </div>
            </div>
            <div className="big__button__day__mani">
              <div className="day__mani">
                <span className="day__mani__99">$96.00/ </span>
                <span className="day__tex">day</span>
              </div>
              <div className="button__rent__Mow">
                <a href="">Rent Now</a>
              </div>
            </div>
          </div>
            
            </SwiperSlide>

            <SwiperSlide style={cardStyle}>
              <div className="Carts__Catalog">
            <div className="Carts__top__tex__icons">
              <div className="text__Car">
                <span className="text__name__car">Nissan Gt-R </span> <br />
                <span className="text__sport">Sport</span>
              </div>
              <div className="icons__Heart">
                <HeartWhite />
              </div>
            </div>

            <div className="box__img__icons">
              <div className="box__img__car">
                <img src={CarGTRImg} alt="" />
              </div>

              <div className="box__icons__big">
                <div className="icons__Tex">
                  <Refill /> <span className="Number__refill">80L</span>
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
                <span className="day__mani__99">$80.00/ </span>
                <span className="day__tex">day</span>
                <p className="day__mani__100">$100.00</p>
              </div>
              <div className="button__rent__Mow">
                <a href="">Rent Now</a>
              </div>
            </div>
          </div>
            </SwiperSlide>
          </Swiper>

        </div>
        <div className="Recomendation__Car">
          <span className="Rec__tex">Recomendation Car</span>
        </div>
      </div>
    </section>
  );
};

export default SlayedCarts;


