import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ServiceMain = () => {
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">קמפיינים ממומנים</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>פייסבוק ואינסטגרם</li>
                        <li>גוגל אדס</li>
                        <li>יוטיוב</li>
                        <li>לינקדאין</li>
                        <li>טיקטוק</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>פרטים נוספים</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">קידום אורגני SEO</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>מחקר מילות מפתח</li>
                        <li>אופטימיזציה לאתר</li>
                        <li>בניית קישורים</li>
                        <li>קידום מקומי</li>
                        <li>דוחות ביצועים</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>פרטים נוספים</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">ניהול רשתות חברתיות</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>אסטרטגיית תוכן</li>
                        <li>יצירת תוכן</li>
                        <li>ניהול קהילה</li>
                        <li>עיצוב גרפי</li>
                        <li>ניתוח ביצועים</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>פרטים נוספים</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">בניית אתרים</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>אתרי תדמית</li>
                        <li>חנויות אונליין</li>
                        <li>דפי נחיתה</li>
                        <li>עיצוב UX/UI</li>
                        <li>תחזוקה שוטפת</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>פרטים נוספים</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">כתיבת תוכן</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>תוכן לאתרים</li>
                        <li>מאמרים מקצועיים</li>
                        <li>תוכן לרשתות חברתיות</li>
                        <li>תיאורי מוצר</li>
                        <li>ניוזלטרים</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>פרטים נוספים</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          06
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">אנליטיקס ודוחות</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>ניתוח נתונים</li>
                        <li>דוחות ביצועים</li>
                        <li>מעקב המרות</li>
                        <li>אופטימיזציה</li>
                        <li>המלצות לשיפור</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>פרטים נוספים</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
      </div>
    </section>
  );
};

export default ServiceMain;