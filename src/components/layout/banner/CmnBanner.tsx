import React from "react";
import Link from "next/link";

interface BannerProps {
  title?: any;
  navigation?: any;
  parent?: any;
  parentLink?: any;
}

const CmnBanner = ({ title, navigation, parent, parentLink }: BannerProps) => {
  return (
    <>
      <section
        className="cmn-banner bg-img"
        style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
      >
        <div className="container">
          <div className="row gaper align-items-center">
            <div className="col-12 col-lg-5 col-xl-7">
              <div className="text-center text-lg-end">
                <h2 className="title title-anim">{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house"></i>
                        דף הבית
                      </Link>
                    </li>
                    {parent && (
                      <li className="breadcrumb-item">
                        <Link href={parentLink}>{parent}</Link>
                      </li>
                    )}
                    <li className="breadcrumb-item active" aria-current="page">
                      {navigation}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-5">
              <div className="text-center text-lg-end">
                <p className="primary-text">
                  נתי מימון - מומחה שיווק דיגיטלי ומייסד משרד פרסום מוביל, עם התמחות בקידום עסקים בבאר שבע, קריית גת וכל אזור הדרום.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmnBanner;