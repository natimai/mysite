import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import nine from "public/images/blog/nine.png";
import ten from "public/images/blog/ten.png";
import eleven from "public/images/blog/eleven.png";

gsap.registerPlugin(ScrollTrigger);
const HomeThreeBlog = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section blog-three pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                الأخبار والمدونة
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">ما الجديد في المدونة</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="blog-three__wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div
                    className="blog-three__single"
                    onMouseEnter={() => setActiveIndex(0)}
                  >
                    <div className="blog__single-content">
                      <h4>
                        <Link href="blog-single">
                          كيف تدير الأعمال التجارية عبر الإنترنت ، الممر شهدت
                          طفرة
                        </Link>
                      </h4>
                      <div className="blog__single-meta">
                        <Link href="blog" className="sub-title">
                          مبدع
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <p>MARCH 23, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="blog-three__single"
                    onMouseEnter={() => setActiveIndex(1)}
                  >
                    <div className="blog__single-content">
                      <h4>
                        <Link href="blog-single">
                          كيف تدير الأعمال التجارية عبر الإنترنت ، الممر شهدت
                          طفرة
                        </Link>
                      </h4>
                      <div className="blog__single-meta">
                        <Link href="blog" className="sub-title">
                          مبدع
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <p>MARCH 23, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="blog-three__single"
                    onMouseEnter={() => setActiveIndex(2)}
                  >
                    <div className="blog__single-content">
                      <h4>
                        <Link href="blog-single">
                          كيف تدير الأعمال التجارية عبر الإنترنت ، الممر شهدت
                          طفرة
                        </Link>
                      </h4>
                      <div className="blog__single-meta">
                        <Link href="blog" className="sub-title">
                          مبدع
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <p>MARCH 23, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="blog-three__thumb g-blog-thumb">
                    <div
                      className={
                        "blog-single-img" +
                        (activeIndex === 0 ? " blog-single-img-active" : " ")
                      }
                    >
                      <Link href="blog-single">
                        <Image src={eleven} alt="Image" />
                      </Link>
                    </div>
                    <div
                      className={
                        "blog-single-img" +
                        (activeIndex === 1 ? " blog-single-img-active" : " ")
                      }
                    >
                      <Link href="blog-single">
                        <Image src={ten} alt="Image" />
                      </Link>
                    </div>
                    <div
                      className={
                        "blog-single-img" +
                        (activeIndex === 2 ? " blog-single-img-active" : " ")
                      }
                    >
                      <Link href="blog-single">
                        <Image src={nine} alt="Image" />
                      </Link>
                    </div>
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

export default HomeThreeBlog;
