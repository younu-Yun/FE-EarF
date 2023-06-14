import styles from './Test.module.scss';
export default function Test() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.bgshape}>
          <img src='https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405214/starwars/logo.webp' alt='' />
        </div>
        {/* 제품 이미지 */}
        <div className={styles.productimg}>
          <div className={styles.productimgitem} id='img1'>
            <img
              src='https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-1.webp'
              alt='star wars'
              className={styles.productimgimg}
            />
          </div>

          <div className={styles.productimgitem} id='img2'>
            <img
              src='https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-2.webp'
              alt='star wars'
              className={styles.productimgimg}
            />
          </div>

          <div className={styles.productimgitem} id='img3'>
            <img
              src='https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405218/starwars/item-3.webp'
              alt='star wars'
              className={styles.productimgimg}
            />
          </div>

          <div className={styles.productimgitem} id='img4'>
            <img
              src='https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-4.webp'
              alt='star wars'
              className={styles.productimgimg}
            />
          </div>
        </div>
        {/* 슬라이더 */}
        <div className={styles.productslider}>
          <button className={`${styles.prev} ${styles.disabled}`}>
            <span className={styles.icon}>
              <svg className={`${styles.icon} ${styles.iconarrowright}`}>
                <use xlinkHref='#icon-arrow-left'></use>
              </svg>
            </span>
          </button>
          <button className={styles.next}>
            <span className={styles.icon}>
              <svg className={`${styles.icon} ${styles.iconarrowright}`}>
                <use xlinkHref='#icon-arrow-right'></use>
              </svg>
            </span>
          </button>
          {/* 여기까지가 좌우버튼 */}
          {/* 제품 항목 */}
          <div className={`${styles.productsliderwrp} ${styles.swiperwrapper}`}>
            {/* //항목 1 */}
            <div className={`${styles.productslideritem} ${styles.swiperslide}`} data-target='img4'>
              <div className={styles.productslidercard}>
                <img
                  src='https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp'
                  alt='star wars'
                  className={styles.productslidercover}
                />
                <div className={styles.productslidercontent}>
                  <h1 className={styles.productslidertitle}>
                    STORMTROPER <br />
                    HELMET
                  </h1>
                  <span className={styles.productsliderprice}>
                    $1.299,<sup>99</sup>
                  </span>
                  <div className={styles.productctr}>
                    <div className={styles.productlabels}>
                      <div className={styles.productlabelstitle}>HELMET SIZE</div>

                      <div className={styles.productlabelsgroup}>
                        <label className={styles.productlabelsitem}>
                          <input type='radio' className={styles.productlabelscheckbox} name='type5' />
                          <span className={styles.productlabelstxt}>S</span>
                        </label>

                        <label className={styles.productlabelsitem}>
                          <input type='radio' className={styles.productlabelscheckbox} name='type5' checked />
                          <span className={styles.productlabelstxt}>M</span>
                        </label>

                        <label className={styles.productlabelsitem}>
                          <input type='radio' className={styles.productlabelscheckbox} name='type5' />
                          <span className={styles.productlabelstxt}>L</span>
                        </label>

                        <label className={styles.productlabelsitem}>
                          <input type='radio' className={styles.productlabelscheckbox} name='type5' />
                          <span className={styles.productlabelstxt}>XL</span>
                        </label>
                      </div>
                    </div>

                    <span className={styles.hrvertical}></span>

                    <div className={styles.productinf}>
                      <div className={styles.productinfpercent}>
                        <div className={styles.productinfpercentcircle}>
                          <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'>
                            <defs>
                              <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                                <stop offset='0%' stopColor='#0c1e2c' stopOpacity='0' />
                                <stop offset='100%' stopColor='#cb2240' stopOpacity='1' />
                              </linearGradient>
                            </defs>
                            <circle
                              cx='50'
                              cy='50'
                              r='47'
                              strokeDasharray='240, 300'
                              stroke='#cb2240'
                              strokeWidth='4'
                              fill='none'
                            />
                          </svg>
                        </div>
                        <div className={styles.productinfpercenttxt}>80%</div>
                      </div>

                      <span className={styles.productinftitle}>DURABILITY RATE</span>
                    </div>
                  </div>

                  <div className={styles.productsliderbottom}>
                    <button className={styles.productslidercart}>ADD TO CART</button>

                    <button className={`${styles.productsliderfav} ${styles.jsfav}`}>
                      <span className={styles.heart}></span> ADD TO WISHLIST
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* // 항목 2 */}
            <div className={`${styles.productslideritem} ${styles.swiperslide}`} data-target='img1'>
              <div className={styles.productslidercard}>
                <img
                  src='https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-1-bg.webp'
                  alt='star wars'
                  className={styles.productslidercover}
                />
                <div className={styles.productslidercontent}>
                  <h1 className={styles.productslidertitle}>
                    IMPERIAL ARMY’S <br /> TIE FIGHTER
                  </h1>
                  <span className={styles.productsliderprice}>
                    $9.999,<sup>99</sup>
                  </span>
                  <div className={styles.productctr}>
                    <div className={styles.productlabels}>
                      <div className={styles.productlabelstitle}>ENGINE UNIT</div>

                      <div className={styles.productlabelsgroup}>
                        <label className={styles.productlabelsitem}>
                          <input type='radio' className={styles.productlabelscheckbox} name='type1' checked />
                          <span className={styles.productlabelstxt}>P-S4 TWIN</span>
                        </label>

                        <label className={styles.productlabelsitem}>
                          <input type='radio' className={styles.productlabelscheckbox} name='type1' />
                          <span className={styles.productlabelstxt}>P-W401</span>
                        </label>
                      </div>
                    </div>

                    <span className={styles.hrvertical}></span>

                    <div className={styles.productinf}>
                      <div className={styles.productinfpercent}>
                        <div className={styles.productinfpercentcircle}>
                          <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'>
                            <defs>
                              <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                                <stop offset='0%' stopColor='#0c1e2c' stopOpacity='0' />
                                <stop offset='100%' stopColor='#cb2240' stopOpacity='1' />
                              </linearGradient>
                            </defs>
                            <circle
                              cx='50'
                              cy='50'
                              r='47'
                              strokeDasharray='225, 300'
                              stroke='#cb2240'
                              strokeWidth='4'
                              fill='none'
                            />
                          </svg>
                        </div>
                        <div className={styles.productinfpercenttxt}>75%</div>
                      </div>

                      <span className={styles.productinftitle}>DURABILITY</span>
                    </div>
                  </div>

                  <div className={styles.productsliderbottom}>
                    <button className={styles.productslidercart}>ADD TO CART</button>

                    <button className={`${styles.productsliderfav} ${styles.jsfav}`}>
                      <span className={styles.heart}></span> ADD TO WISHLIST
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
