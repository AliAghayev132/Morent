import "./Category.css"
import { HiMiniArrowsUpDown } from "react-icons/hi2";

const CategoryPage = () => {
    return (
        <div className="category__page">
            <div className="category">
                <div className="category__sidebar">
                    <div className="sidebar__type">
                        <h6>TYPE</h6>
                        <div className="type__checkbox">
                            <input type="checkbox" />
                            <p>Sport</p>
                            <p>(10)</p>
                        </div>
                        <div className="type__checkbox">
                            <input type="checkbox" />
                            <p>SUV</p>
                            <p>(12)</p>
                        </div>
                        <div className="type__checkbox">
                            <input type="checkbox" />
                            <p>MPV</p>
                            <p>(16)</p>
                        </div>
                        <div className="type__checkbox">
                            <input type="checkbox" />
                            <p>Sedan</p>
                            <p>(20)</p>
                        </div>
                        <div className="type__checkbox">
                            <input type="checkbox" />
                            <p>Coupe</p>
                            <p>(14)</p>
                        </div>
                        <div className="type__checkbox">
                            <input type="checkbox" />
                            <p>Hatchback</p>
                            <p>(14)</p>
                        </div>
                    </div>
                    <div className="sidebar__capacity">
                        <h6>CAPACITY</h6>
                        <div className="capacity__checkbox">
                            <input type="checkbox" />
                            <p>2 Person</p>
                            <p>(10)</p>
                        </div>
                        <div className="capacity__checkbox">
                            <input type="checkbox" />
                            <p>4 Person</p>
                            <p>(14)</p>
                        </div>
                        <div className="capacity__checkbox">
                            <input type="checkbox" />
                            <p>6 Person</p>
                            <p>(12)</p>
                        </div>
                        <div className="capacity__checkbox">
                            <input type="checkbox" />
                            <p>8 Person</p>
                            <p>(16)</p>
                        </div>
                    </div>
                    <div className="sidebar__price">
                        <h6>PRICE</h6>
                        <div className="price__range">
                            <input type="range" />
                            <p>Max.$100.00</p>
                        </div>

                    </div>
                </div>
                <div className="category__container">

                    <div className="category__title">
                        <div className="category__title__left">
                            <div className="title__left__radio">
                                <input type="radio" name="same" />
                                <p>Pick-Up</p>
                            </div>
                            <div className="title__left__content">
                                <div className="content__select">
                                    <h3>Location</h3>
                                    <select name="" id="">
                                        <option value="" className="hidden" hidden>Select your city</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                    </select>
                                </div>
                                <div className="content__select">
                                    <h3>Date</h3>
                                    <select name="" id="">
                                        <option value="" className="hidden" hidden>Select your Date</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                    </select>
                                </div>
                                <div className="content__select">
                                    <h3>Time</h3>
                                    <select name="" id="">
                                        <option value="" className="hidden" hidden>Select your Time</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="category__title__button">
                            <button><HiMiniArrowsUpDown className="arrows-icon" /></button>
                        </div>
                        <div className="category__title__right">
                            <div className="title__left__radio">
                                <input type="radio" name="same" />
                                <p>Drop-Off</p>
                            </div>
                            <div className="title__left__content">
                                <div className="content__select">
                                    <h3>Location</h3>
                                    <select name="" id="">
                                        <option value="" className="hidden" hidden>Select your city</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                    </select>
                                </div>
                                <div className="content__select">
                                    <h3>Date</h3>
                                    <select name="" id="">
                                        <option value="" className="hidden" hidden>Select your Date</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                    </select>
                                </div>
                                <div className="content__select">
                                    <h3>Time</h3>
                                    <select name="" id="">
                                        <option value="" className="hidden" hidden>Select your Time</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                        <option value="">salam</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CategoryPage