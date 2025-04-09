import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Импорт стилей Swiper
import "swiper/css";
//css
import "./DetailPage.css";
//img
import CarKoeImg from "../../assets/img/car-Koenigsegg.jpg";
import CarGTRImg from "../../assets/img/car-NissanGT-R.jpg";
import CarRolImg from "../../assets/img/car-RollsRoyce.jpg";
//CArs img
import CarImgNisan from "../../assets/img/Car-2.png";
import CarView1 from "../../assets/img/View.jpeg";
import CarView2 from "../../assets/img/View-2.jpeg";
import CarView3 from "../../assets/img/View-3.jpeg";
import imgUser1 from "../../assets/img/Profill--1.jpg";
import imgUser2 from "../../assets/img/Profill--22.jpg";
//CArs2 img
import ImgCarsAllNewRush from "../../assets/img/Car-AllNewRush.jpg";
import ImgCarsAllNewTeri from "../../assets/img/CarAllNewTerios.jpg";
import ImgCarsCRV from "../../assets/img/Car-CRV.jpg";
import ImgCarsCRVBlack from "../../assets/img/Car-CRVBlack.jpg";
import ImgCarsMGZX from "../../assets/img/Car-MGZX.jpg";
import ImgCarsMGZSwhite from "../../assets/img/Car-MGZSwhite.jpg";

// icons

import { Refill } from "../../assets/Icons/Refill";
import { User } from "../../assets/Icons/User";
import { Car } from "../../assets/Icons/Car";
import { HeartRed } from "../../assets/Icons/HeartRed";
import { HeartWhite } from "../../assets/Icons/Heartwhite";
import { Iconsss } from "../../assets/Icons/Iconsss";

const DetailPage = () => {
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
    <section className="ContactPaymentPage">
      <div className="container__Big">
        <div className="Nav__bar__side">
          <div className="filter__container">
            <form>
              <div className="input__headers">Type</div>
              <div className="filter">
                <label>
                  <input type="checkbox" checked />
                  <span className="about__the__car__text"> sport </span>
                  <span className="all__about__the__car__text__numbers">
                    (10)
                  </span>
                </label>
                <br /> <br />
                <label>
                  <input type="checkbox" checked />
                  <span className="about__the__car__text"> SUV </span>
                  <span className="all__about__the__car__text__numbers">
                    (12)
                  </span>
                </label>
                <br /> <br />
                <label>
                  <input type="checkbox" />
                  <span className="about__the__car__text"> MPV </span>{" "}
                  <span className="all__about__the__car__text__numbers">
                    (16)
                  </span>
                </label>
                <br /> <br />
                <label>
                  <input type="checkbox" />
                  <span className="about__the__car__text"> Sedan </span>
                  <span className="all__about__the__car__text__numbers">
                    (20)
                  </span>
                </label>
                <br /> <br />
                <label>
                  <input type="checkbox" />
                  <span className="about__the__car__text"> Coupe </span>{" "}
                  <span className="all__about__the__car__text__numbers">
                    (14)
                  </span>
                </label>
                <br /> <br />
                <label>
                  <input type="checkbox" />
                  <span className="about__the__car__text">
                    {" "}
                    Hatchback{" "}
                  </span>{" "}
                  <span className="all__about__the__car__text__numbers">
                    (14)
                  </span>
                </label>
                <br /> <br />
              </div>
              <div className="input__headers">CAPACITY</div>
              <div className="filter">
                <label>
                  <input type="checkbox" checked />{" "}
                  <span className="about__the__car__text">2 Person</span>{" "}
                  <span className="all__about__the__car__text__numbers">
                    (14)
                  </span>
                </label>
                <br /> <br />
                <label>
                  <input type="checkbox" />{" "}
                  <span className="about__the__car__text">4 Person</span>{" "}
                  <span className="all__about__the__car__text__numbers">
                    (14)
                  </span>
                </label>
                <br /> <br />
                <label>
                  <input type="checkbox" />
                  <span className="about__the__car__text"> 6 Person</span>{" "}
                  <span className="all__about__the__car__text__numbers">
                    (12)
                  </span>
                </label>
                <br /> <br />
                <label>
                  <input type="checkbox" checked />{" "}
                  <span className="about__the__car__text">8 or More </span>{" "}
                  <span className="all__about__the__car__text__numbers">
                    (16){" "}
                  </span>
                </label>
                <br /> <br />
              </div>
              <div className="input__headers">Price</div>
              <div className="filter">
                <input
                  type="range"
                  min="0"
                  max="70"
                  value="70"
                  className="price-range"
                />
                <p className="text__max">
                  Max. $ <span className="price-value">100.0</span>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="container__left__Big">
          <div className="Ads__container_car">
            <div className="Box__Ads2">
              <div className="box__Ads2__Payment">
                <div className="box__Ads__text2__Payment">
                  <span className="text__ads__Payment">
                    Sports car with the best
                  </span>{" "}
                  <br />
                  <span className="text__ads__Payment">
                    design and acceleration{" "}
                  </span>
                  <p className="text__par__Payment">
                    Safety and comfort while driving a <br /> futuristic and
                    elegant sports car
                  </p>
                </div>
                <div className="Car__rental__img__Payment">
                  <img src={CarImgNisan} alt="" />
                </div>
              </div>
              <div className="box__Ads2__Bottom">
                <div className="img__ads">
                  <img src={CarView3} alt="" />
                </div>
                <div className="img__ads">
                  <img src={CarView2} alt="" />
                </div>
                <div className="img__ads">
                  <img src={CarView1} alt="" />
                </div>
              </div>
            </div>
            <div className="Box__Ads1">
              <div className="Big__text_icons__tu">
                <div className="text__name_Nissan">
                  <span className="NisaanGT__text"> Nissan GT-R</span> <br />
                  <div className="reviwer__div">
                    <span>
                      <Iconsss />
                      <Iconsss />
                      <Iconsss />
                      <Iconsss />
                      <Iconsss />
                    </span>
                    <span className="reviewer__text">440 +reviewer</span>
                  </div>
                </div>

                <span>
                  <HeartRed />
                </span>
              </div>

              <div className="Text__Nissa__ds">
                <p>
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track".
                </p>
              </div>

              <div className="SportTypeCar">
                <div>
                  <span className="ser">TupeCar</span>
                  <br />
                  <span className="ser">Steering</span>
                </div>
                <div>
                  <span className="black__re"> Sport</span> <br />
                  <span className="black__re">manual</span>
                </div>
                <div>
                  <span className="ser">Capacity</span>
                  <br />
                  <span className="ser">Gasoline</span>
                </div>
                <div>
                  <span className="black__re">2 Person</span>
                  <br />
                  <span className="black__re">70L</span>
                </div>
              </div>

              <div className="big__button__day__mani__t">
                <div className="day__mani__t">
                  <span className="day__mani__99__t">$ 80.00/ </span>
                  <span className="day__tex__t">day</span>
                  <p className="day__mani__100__t">%100</p>
                </div>
                <div className="button__rent__Mow__t">
                  <a href="">Rent Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="text_reviews__Container">
            <div className="Review__13">
              <span className="Reviews__13__value">Reviews</span>
              <div className="text__13__big">13</div>
            </div>

            <div className="reviews__box__container__t">
              <div className="IMg__user__bigbox">
                <div className="photo__name">
                  <div className="Img__user">
                    <img src={imgUser1} alt="" />
                  </div>
                  <div className="User__text">
                    <div>
                      <span className="user__name__tex">Alex Stanton</span>{" "}
                      <br />
                      <span className="name__company">CEO at Bukalapak</span>
                    </div>
                  </div>
                </div>
                <div className="July">
                  <span className="text__july">21 July 2022</span>
                  <div>
                    <span>
                      <Iconsss /> <Iconsss />
                      <Iconsss />
                      <Iconsss />
                      <Iconsss />
                    </span>
                  </div>
                </div>
              </div>
              <div className="paragraph__container">
                <div className="text__container">
                  <p className="paragraph">
                    We are very happy with the service from the MORENT App.
                    Morent has a low price and also a large variety of cars with
                    good and comfortable facilities. In addition, the service
                    provided by the officers is also very friendly and very
                    polite.
                  </p>
                </div>
              </div>
            </div>
            <div className="reviews__box__container">
              <div className="IMg__user__bigbox">
                <div className="photo__name">
                  <div className="Img__user">
                    <img src={imgUser2} alt="" />
                  </div>
                  <div className="User__text">
                    <div>
                      <span className="user__name__tex">Skylar Dias</span>{" "}
                      <br />
                      <span className="name__company">CEO at Amazon</span>
                    </div>
                  </div>
                </div>
                <div className="July">
                  <span className="text__july">21 July 2022</span>
                  <div>
                    <span>
                      <Iconsss /> <Iconsss />
                      <Iconsss />
                      <Iconsss />
                      <Iconsss />
                    </span>
                  </div>
                </div>
              </div>
              <div className="paragraph__container">
                <div className="text__container">
                  <p className="paragraph">
                    We are very happy with the service from the MORENT App.
                    Morent has a low price and also a large variety of cars with
                    good and comfortable facilities. In addition, the service
                    provided by the officers is also very friendly and very
                    polite.
                  </p>
                </div>
              </div>
            </div>
            <div className="div__button__e">
              <div className="Div__button">
                <span className="ShowAll">Show All</span>
              </div>
            </div>
          </div>
          <div className="RecentCar__box_big">
            <span className="Rec__tex">Recent Car</span>
            <span className="View__texrr">View All</span>
          </div>
          <div className="swiper__box__car">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20} // Промежуток между карточками
              autoplay={{
                delay: 2500, // Задержка между переходами
                disableOnInteraction: false, // Автопрокрутка не будет отключена после взаимодействия
              }}
              breakpoints={{
                // 1150: {
                //   slidesPerView: 4, // 4 карточки для экранов шире 1150 пикселей
                // },
                870: {
                  slidesPerView: 3, // 3 карточки для экранов от 850 до 1150 пикселей
                },
                620: {
                  slidesPerView: 2, // 2 карточки для экранов от 400 до 850 пикселей
                },
                280: {
                  slidesPerView: 1, // 1 карточка для экранов шире 280 пикселей
                },
              }}
              style={{ width: "100%", padding: "20px" }} // Установить ширину для Swiper
            >
              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__van">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">Koenigsegg </span>{" "}
                      <br />
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
                      <span className="day__mani__99">$ 99.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__van">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">Nissan GT-R </span>{" "}
                      <br />
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
                      <span className="day__mani__99">$ 80.00/ </span>
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
                <div className="Carts__Catalog carts__catalog__van">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">Rolls-Royce </span>{" "}
                      <br />
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
                      <span className="day__mani__99">$ 96.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__van">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">Nissan Gt-R</span>{" "}
                      <br />
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
                      <span className="day__mani__99">$ 80.00/ </span>
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
                <div className="Carts__Catalog carts__catalog__van">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">Koenigsegg </span>{" "}
                      <br />
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
                      <span className="day__mani__99">$ 99.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__van">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">Nissan Gt-R </span>{" "}
                      <br />
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
                      <span className="day__mani__99">$ 80.00/ </span>
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
                <div className="Carts__Catalog carts__catalog__van">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">Rolls-Royce </span>{" "}
                      <br />
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
                      <span className="day__mani__99">$ 96.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__van">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">Nissan Gt-R </span>{" "}
                      <br />
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
                      <span className="day__mani__99">$ 80.00/ </span>
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
          <div className="RecentCar__box_big">
            <span className="Rec__tex">Recent Car</span>
            <span className="View__texrr">View All</span>
          </div>
          <div className="swiper__box__car2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20} // Промежуток между карточками
              autoplay={{
                delay: 2500, // Задержка между переходами
                disableOnInteraction: false, // Автопрокрутка не будет отключена после взаимодействия
              }}
              breakpoints={{
                // 1150: {
                //   slidesPerView: 4, // 4 карточки для экранов шире 1150 пикселей
                // },
                870: {
                  slidesPerView: 3, // 3 карточки для экранов от 850 до 1150 пикселей
                },
                620: {
                  slidesPerView: 2, // 2 карточки для экранов от 400 до 850 пикселей
                },
                280: {
                  slidesPerView: 1, // 1 карточка для экранов шире 280 пикселей
                },
              }}
              style={{ width: "100%", padding: "20px" }} // Установить ширину для Swiper
            >
              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__box ">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">All New Rush</span>{" "}
                      <br />
                      <span className="text__sport">Suv</span>
                    </div>
                    <div className="icons__Heart">
                      <HeartWhite />
                    </div>
                  </div>

                  <div className="box__img__icons box__img__meters">
                    <div className="box__img__car img__cars__meters">
                      <img src={ImgCarsAllNewRush} alt="" />
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
                        <span className="People_tex">6 People</span>
                      </div>
                    </div>
                  </div>
                  <div className="big__button__day__mani">
                    <div className="day__mani">
                      <span className="day__mani__99">$ 72.00/ </span>
                      <span className="day__tex">day</span>
                      <p className="day__mani__100">80.00</p>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__box ">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">CR-V</span> <br />
                      <span className="text__sport">Suv</span>
                    </div>
                    <div className="icons__Heart">
                      <HeartRed />
                    </div>
                  </div>

                  <div className="box__img__icons box__img__meters">
                    <div className="box__img__car img__cars__meters">
                      <img src={ImgCarsCRV} alt="" />
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
                        <span className="People_tex">6 People</span>
                      </div>
                    </div>
                  </div>
                  <div className="big__button__day__mani">
                    <div className="day__mani">
                      <span className="day__mani__99">$80.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__box">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">All New Terios</span>{" "}
                      <br />
                      <span className="text__sport">Suv</span>
                    </div>
                    <div className="icons__Heart">
                      <HeartWhite />
                    </div>
                  </div>

                  <div className="box__img__icons box__img__meters">
                    <div className="box__img__car img__cars__meters">
                      <img src={ImgCarsAllNewTeri} alt="" />
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
                        <span className="People_tex">6 People</span>
                      </div>
                    </div>
                  </div>
                  <div className="big__button__day__mani">
                    <div className="day__mani">
                      <span className="day__mani__99">$74.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__box">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">CR-V</span> <br />
                      <span className="text__sport">Suv</span>
                    </div>
                    <div className="icons__Heart">
                      <HeartRed />
                    </div>
                  </div>

                  <div className="box__img__icons box__img__meters">
                    <div className="box__img__car img__cars__meters">
                      <img src={ImgCarsCRVBlack} alt="" />
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
                        <span className="People_tex">6 People</span>
                      </div>
                    </div>
                  </div>
                  <div className="big__button__day__mani">
                    <div className="day__mani">
                      <span className="day__mani__99">$80.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__box">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">MG ZX Exclusice</span>{" "}
                      <br />
                      <span className="text__sport">hatchback</span>
                    </div>
                    <div className="icons__Heart">
                      <HeartRed />
                    </div>
                  </div>

                  <div className="box__img__icons box__img__meters">
                    <div className="box__img__car img__cars__meters">
                      <img src={ImgCarsMGZX} alt="" />
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
                      <span className="day__mani__99">$76.00/ </span>
                      <span className="day__tex">day</span>
                      <p className="day__mani__100">80.00</p>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__box">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">New MG ZS</span> <br />
                      <span className="text__sport">Suv</span>
                    </div>
                    <div className="icons__Heart">
                      <HeartWhite />
                    </div>
                  </div>

                  <div className="box__img__icons box__img__meters">
                    <div className="box__img__car img__cars__meters">
                      <img src={ImgCarsMGZSwhite} alt="" />
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
                        <span className="People_tex">6 People</span>
                      </div>
                    </div>
                  </div>
                  <div className="big__button__day__mani">
                    <div className="day__mani">
                      <span className="day__mani__99">$80.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__box">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">MG ZX Exclusice</span>{" "}
                      <br />
                      <span className="text__sport">hatchback</span>
                    </div>
                    <div className="icons__Heart">
                      <HeartRed />
                    </div>
                  </div>

                  <div className="box__img__icons box__img__meters">
                    <div className="box__img__car img__cars__meters">
                      <img src={ImgCarsMGZX} alt="" />
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
                        <span className="People_tex">4 People</span>
                      </div>
                    </div>
                  </div>
                  <div className="big__button__day__mani">
                    <div className="day__mani">
                      <span className="day__mani__99">$76.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={cardStyle}>
                <div className="Carts__Catalog carts__catalog__box">
                  <div className="Carts__top__tex__icons">
                    <div className="text__Car">
                      <span className="text__name__car">New MG ZS</span> <br />
                      <span className="text__sport">Suv</span>
                    </div>
                    <div className="icons__Heart">
                      <HeartRed />
                    </div>
                  </div>

                  <div className="box__img__icons box__img__meters">
                    <div className="box__img__car img__cars__meters">
                      <img src={ImgCarsMGZSwhite} alt="" />
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
                        <span className="People_tex">6 People</span>
                      </div>
                    </div>
                  </div>
                  <div className="big__button__day__mani">
                    <div className="day__mani">
                      <span className="day__mani__99">$80.00/ </span>
                      <span className="day__tex">day</span>
                    </div>
                    <div className="button__rent__Mow">
                      <a href="">Rent Now</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
