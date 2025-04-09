import "./Payment.css"
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import myImage2 from '../../assets/image/visa-512.webp';
import myImage3 from "../../assets/image/196566.png";
import myImage4 from "../../assets/image/bitcoin.webp";
import myImage5 from "../../assets/image/nissangtr.jpg";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";


const PaymentPage = () => {
    return (
        <div className="payment__page">
            <div className="payment">
                <div className="payment__left">
                    <div className="payment__left__se1">
                        <div className="left__se1__title">
                            <div className="left__se1__title__left">
                                <h3>Billing Info</h3>
                                <p>Please enter your billing info</p>
                            </div>
                            <div className="left__se1__title__right">
                                <p>Step 1 of 4</p>
                            </div>
                        </div>
                        <div className="left__se1__container">
                            <div className="se1__container__input">
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" placeholder="Your name" />
                            </div>
                            <div className="se1__container__input">
                                <label htmlFor="number">Phone Number</label>
                                <input id="number" type="tel" placeholder="Phone number" />
                            </div>
                            <div className="se1__container__input">
                                <label htmlFor="address">Address</label>
                                <input id="address" type="address" placeholder="Address" />
                            </div>
                            <div className="se1__container__input">
                                <label htmlFor="city">Town / City</label>
                                <input id="city" type="text" placeholder="Town or City" />
                            </div>
                        </div>
                    </div>
                    <div className="payment__left__se1">
                        <div className="left__se1__title">
                            <div className="left__se1__title__left">
                                <h3>Rental Info</h3>
                                <p>Please select your rental date</p>
                            </div>
                            <div className="left__se1__title__right">
                                <p>Step 2 of 4</p>
                            </div>
                        </div>
                        <div className="left__se1__container container1">
                            <div className="se1__container__title">
                                <input name="same" type="radio" />
                                <p>Pick-Up</p>
                            </div>
                            <div className="container__content">
                                <div className="se1__container__input">
                                    <label htmlFor="location">Locations</label>
                                    <select id="location">
                                        <option value="" hidden>Select your city</option>
                                        <option value="">Turkey</option>
                                        <option value="">Azerbaijan</option>
                                        <option value="">Russia</option>
                                    </select>
                                </div>
                                <div className="se1__container__input">
                                    <label htmlFor="date">Date</label>
                                    <select id="date">
                                        <option value="" hidden>Select your date</option>
                                        <option value="">01</option>
                                        <option value="">02</option>
                                        <option value="">03</option>
                                    </select>
                                </div>
                                <div className="se1__container__input">
                                    <label htmlFor="time">Time</label>
                                    <select id="time">
                                        <option value="" hidden>Select your time</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="left__se1__container container2">
                            <div className="se1__container__title">
                                <input name="same" type="radio" />
                                <p>Drop-Off</p>
                            </div>
                            <div className="container__content">
                                <div className="se1__container__input">
                                    <label htmlFor="location">Locations</label>
                                    <select id="location">
                                        <option value="" hidden>Select your city</option>
                                        <option value="">Turkey</option>
                                        <option value="">Azerbaijan</option>
                                        <option value="">Russia</option>
                                    </select>
                                </div>
                                <div className="se1__container__input">
                                    <label htmlFor="date">Date</label>
                                    <select id="date">
                                        <option value="" hidden>Select your date</option>
                                        <option value="">01</option>
                                        <option value="">02</option>
                                        <option value="">03</option>
                                    </select>
                                </div>
                                <div className="se1__container__input">
                                    <label htmlFor="time">Time</label>
                                    <select id="time">
                                        <option value="" hidden>Select your time</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment__left__se1">
                        <div className="left__se1__title">
                            <div className="left__se1__title__left">
                                <h3>Payment Mehtod</h3>
                                <p>Please enter your payment mehtod</p>
                            </div>
                            <div className="left__se1__title__right">
                                <p>Step 3 of 4</p>
                            </div>
                        </div>
                        <div className="left__se1__container__step3">
                            <div className="se1__container__title">
                                <div className="container__title__input">
                                    <input type="radio" name="pay" />
                                    <p>Credit Card</p>
                                </div>
                                <div className="container__title__pay">
                                    <img src={myImage2} alt="" />
                                </div>
                            </div>
                            <div className="left__se1__container step3__input">

                                <div className="se1__container__input">
                                    <label htmlFor="cardNumber">Name</label>
                                    <input id="cardNumber" type="number" placeholder="Card number" />
                                </div>
                                <div className="se1__container__input">
                                    <label htmlFor="expDate">Expration date</label>
                                    <input id="expDate" type="date" placeholder="DD/MM/YY" />

                                </div>
                                <div className="se1__container__input">
                                    <label htmlFor="cardHold">Card Holder</label>
                                    <input id="cardHold" type="text" placeholder="Card holder" />

                                </div>
                                <div className="se1__container__input">
                                    <label htmlFor="cvc">CVC</label>
                                    <input id="cvc" type="text" placeholder="CVC" />

                                </div>
                            </div>
                            <div className="se1__container__pay__step3">
                                <div className="se1__container__pay">
                                    <div className="container__pay__left">
                                        <input type="radio" name="pay" />
                                        <p>PayPal</p>
                                    </div>
                                    <div className="container__pay__right">
                                        <img src={myImage3} alt="" />
                                    </div>
                                </div>
                                <div className="se1__container__pay">
                                    <div className="container__pay__left">
                                        <input type="radio" name="pay" />
                                        <p>Bitcoin</p>
                                    </div>
                                    <div className="container__pay__right">
                                        <img src={myImage4} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="payment__left__se1">
                        <div className="left__se1__title">
                            <div className="left__se1__title__left">
                                <h3>Confirmation</h3>
                                <p>We are getting to the end. Just few clicks and your rental is ready!</p>
                            </div>
                            <div className="left__se1__title__right">
                                <p>Step 4 of 4</p>
                            </div>
                        </div>
                        <div className="left__se1__container__step4">
                            <div className="se1__container__checkbox">
                                <input type="checkbox" />
                                <p>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                            </div>
                            <div className="se1__container__checkbox">
                                <input type="checkbox" />
                                <p>I agree with our terms and conditions and privacy policy.</p>
                            </div>
                            <button className="rent_btn">Rent Now</button>
                            <div className="se1__container__foot">
                                <AiOutlineSafetyCertificate className="safety-icon" />
                                <h4>All your data are safe</h4>
                                <p>We are using the most advanced security to provide you the best experience ever.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment__right">
                    <div className="payment__right__title">
                        <h3>Rental Summary</h3>
                        <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
                    </div>
                    <div className="payment__right__body">
                        <img src={myImage5} alt="" />
                        <div className="payment__right__body__right">
                            <h1>Nissan GT - R</h1>
                            <div className="right__body__right__foot">
                                <div className="right__body__right__stars">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStarOutline className="empty-star-icon" />
                                </div>
                                <p>440+ Reviewer</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="payment__right__body2">
                        <div className="right__body2__price">
                            <h4>Subtotal</h4>
                            <p>$80.00</p>
                        </div>
                        <div className="right__body2__price">
                            <h4>Tax</h4>
                            <p>$0</p>
                        </div>
                        <div className="right__body2__input">
                            <input placeholder="Apply promo code" type="text" />
                            <p>Apply now</p>
                        </div>
                    </div>
                    <div className="payment__right__foot">
                        <div className="payment__right__foot__left">
                            <h3>Total Rental Price</h3>
                            <p>Overall price and includes rental discount</p>
                        </div>
                        <p>$80.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage