import Item from "./item"
import './style.scss'
import Footer from "../Footer/";

import geolocationImg from '../../assets/icons/geolocation.png'
import calendarImg from '../../assets/icons/calendar.png'
import peopleImg from '../../assets/icons/people.png'
import tourImg from '../../assets/images/Rectangle 40.png'
function Blog() {


     return (
          <div className="blog-container">
               <div className="navbar-item">
                    <Item />
               </div>
                    <div className="small-text">
                         <span className="span">
                              АВТОБУСНЫЙ ТУР
                         </span>
                         <span className="span">
                              ДЖИППИНГ
                         </span>
                         <span className="span">
                              ЯХТИНГ
                         </span>
                         <span className="span">
                              КАНЬОНИНГ
                         </span>
                    </div>
               <div className="blog-wrapper">
                    <div className="input-btn">
                         <div className="input-1">
                              <input type="text" name="" value={"Абхазия"} id="county" />
                              <img src={geolocationImg} alt="" width={23} height={28} />
                         </div>
                         <div className="input-2">
                              <input type="text" name="" value={"2022-07-16"} id="date" />
                              <img src={calendarImg} alt="" width={23} height={23} />
                         </div>
                         <div className="input-3">
                              <input type="text" name="" id="people" value={"5 человек"} />
                              <img src={peopleImg} alt="" width={23} height={23} />
                         </div>
                         <button className="info-btn">Показать</button>
                    </div>
               </div>

               <div className="our-blogs">

                    <div className="second-container">
                         <div className="div">
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, unde.</p>
                         </div>
                    </div>

                    <div className="first-container">
                         <h2>OUR TOURS</h2>
                         <div className="content">
                              <img src={tourImg} width={250} height={330} alt="" />
                              <div className="text-content">
                                   <span>Автобусный тур</span>
                                   <br />
                                   <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                              </div>
                         </div>
                         <div className="content">
                              <img src={tourImg} width={250} height={330} alt="" />
                              <div className="text-content">
                                   <span>Автобусный тур</span>
                                   <br />
                                   <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                              </div>
                         </div>
                         <div className="content">
                              <img src={tourImg} width={250} height={330} alt="" />
                              <div className="text-content">
                                   <span>Автобусный тур</span>
                                   <br />
                                   <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                              </div>
                         </div>

                         <div className="content">
                              <img src={tourImg} width={250} height={330} alt="" />
                              <div className="text-content">

                                   <span>Автобусный тур</span>
                                   <br />
                                   <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                              </div>
                         </div>
                    </div>

               </div>


               <div className="footer">
                    <Footer />
               </div>
          </div>
     );

}

export default Blog;