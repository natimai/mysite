import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  return (
    <section className="section contact-m">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>טלפון</h4>
                <p>
                  <Link href="tel:0544445567">נייד: 054-4445567</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>דוא״ל</h4>
                <p>
                  <Link href="mailto:nati@natimarketing.co.il">
                    nati@natimarketing.co.il
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>מיקום</h4>
                <p>
                  <Link
                    href="https://www.google.com/maps"
                    target="_blank"
                  >
                    באר שבע, ישראל
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>שעות פעילות</h4>
                <p>א-ה 09:00 - 18:00</p>
                <p>ו 09:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108514.42902083922!2d34.7513599!3d31.252973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15026640029f8777%3A0x8dee8012deb5dd8!2z15HXkNeoINep15HXog!5e0!3m2!1siw!2sil!4v1649562691355!5m2!1siw!2sil"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form fade-top">
                    <h3>השאירו פרטים</h3>
                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="שם מלא"
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="email"
                            name="contact-email"
                            id="contactEmail"
                            placeholder="דוא״ל"
                          />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select className="subject">
                          <option data-display="נושא">נושא</option>
                          <option value="1">קמפיינים ממומנים</option>
                          <option value="2">קידום אורגני</option>
                          <option value="3">בניית אתרים</option>
                          <option value="4">ניהול רשתות חברתיות</option>
                        </select>
                      </div>
                      <div className="group-input">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="הודעה"
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          שלח הודעה
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;