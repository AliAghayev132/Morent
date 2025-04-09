import "./Footer.css"



const Footer = () => {
 return (
     <section className="footer">
   <div className="container">
    <div className="footer__container__tex">
     <div className="box__morent__text">
           <h3 className="text__morent">MORENT</h3>
           <p className="text__morent__bootom">Our vision provide convenience <br /> and help increase your sales business.</p>
     </div>
     <div className="box__about__community__Socials">
         <div className="box__about">
        <h2 className="title__of__the__lower__text" >About</h2>
         <p  className="text__footer__p" >How works</p>
         <p className="text__footer__p" >Featured</p>
         <p className="text__footer__p" >Partnership</p>
         <p className="text__footer__p" >Bussiness</p>
         </div>
         <div  className="box__community" >
         <h2 className="title__of__the__lower__text">Community</h2>
         <p className="text__footer__p" >Events</p>
         <p className="text__footer__p" >Blog</p>
         <p className="text__footer__p" >Podcast</p>
         <p className="text__footer__p" >Invite a friend</p>
         </div>
         <div className="box__social">
         <h2 className="title__of__the__lower__text">Social</h2>
         <p className="text__footer__p" >DisCord</p>
         <p className="text__footer__p" >Instagram</p>
         <p className="text__footer__p" >Twitter</p>
         <p className="text__footer__p" >facebook</p>
         </div>
     </div>
    </div>
    <div className="footer__box__tex__content">
       <div className="reserver__box">
            <span className="reserver__text">@2022 MORENT.All rights reserved</span>
       </div>
       <div className="privacy__terms__text">
         <span className="reserver__text">Privacy & Policy</span>
         <span className="reserver__text">Terms & Condition</span>
       </div>
    </div>
   </div>
     </section>
 )
}

export default Footer;