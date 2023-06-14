import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import HomeCheck from 'assets/icons/HomeCheck.svg';
import homeBanner1 from 'assets/images/homeBanner1.png';
import homeBanner2 from 'assets/images/homeBanner2.png';

function Home() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.homeMain}>
          <div className={styles.inner}>
            <div></div>
            <div></div>
          </div>
        </div>
        <section>
          <div className={styles.inner}>
            <div className={styles.left}>
              <div className={styles.title}>
                <div>
                  <span>chapter 01</span>
                  <h3>기록하기</h3>
                </div>
                <p>
                  지구를 위한 행동은 복잡하고 거창할 필요가 없습니다.
                  <br />
                  어프가 설정한 실현가능한 목표 3가지를 꾸준히 기록해보세요!
                </p>
              </div>
              <div className={styles.contents}>
                <ul>
                  <li>
                    <div>
                      <img src={HomeCheck} alt='체크아이콘' />
                    </div>
                    <span>대중교통 이용하기!</span>
                  </li>
                  <li>
                    <div>
                      <img src={HomeCheck} alt='체크아이콘' />
                    </div>
                    <span>장바구니 사용하기!</span>
                  </li>
                  <li>
                    <div>
                      <img src={HomeCheck} alt='체크아이콘' />
                    </div>
                    <span>일회용컵 대신 텀블러로!</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.right}>
              <img src={homeBanner1} alt='' />
            </div>
          </div>
        </section>
        <section>
          <div className={styles.inner}>
            <div className={styles.left}>
              <div className={styles.title}>
                <div>
                  <span>chapter 02</span>
                  <h3>커뮤니티</h3>
                </div>
                <p>
                  내가 작성한 기록을 자랑하고
                  <br />
                  다른사람들의 환경고민을 들어봐요!
                </p>
              </div>
              <div className={styles.contents}>
                <div className={styles.board}>
                  <div></div>
                  <div></div>
                </div>
                <div className={styles.gradation}></div>
              </div>
            </div>
            <div className={styles.right}>
              <img src={homeBanner2} alt='' />
            </div>
          </div>
        </section>
        <section>
          <div className={styles.inner}>
            <div className={styles.left}>
              <div className={styles.title}>
                <div>
                  <span>chapter 03</span>
                  <h3>뱃지수집</h3>
                </div>
                <p>미션을 수행하고 다양한 뱃지를 모아보세요!</p>
              </div>
              <div className={styles.contents}></div>
            </div>
            <div className={styles.right}></div>
          </div>
        </section>
        <div className={styles.link}>
          <div>
            <h2>지금바로 시작하고 싶다면?</h2>
            <Link to='/join'>시작하기</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
