import styles from './Footer.module.scss';
import { useLocation } from 'react-router-dom';

import headsetIcon from 'assets/icons/headset.svg';
import githubIcon from 'assets/icons/github.svg';
import gitlabIcon from 'assets/icons/gitlab.svg';
import footerLogo from 'assets/images/footerLogo.png';

function Footer() {
  const location = useLocation();

  const hideFooter =
    location.pathname === '/login' ||
    location.pathname === '/join' ||
    location.pathname === '/find_id' ||
    location.pathname === '/find_password' ||
    location.pathname === '/change_passord';

  if (hideFooter) {
    return null; // 경로가 해당되면 Footer를 비노출
  }

  return (
    <footer>
      <div className='inner w1140'>
        <div className={styles.footer_top}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src={footerLogo} alt='하단_로고' />
            </div>
            <ul>
              <li>
                <span>개인정보처리방침</span>
              </li>
              <li>
                <span>이용약관</span>
              </li>
              <li>
                <span>이용안내</span>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                <img src={githubIcon} alt='github' />
              </li>
              <li>
                <img src={gitlabIcon} alt='gitlab' />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_info}>
          <ul>
            <li>
              <div>
                <strong>CUSTOMER CENTER</strong>
                <span>
                  <img src={headsetIcon} alt='headset' />
                  <a href='tel:전화번호'>02-1234-5678</a>
                </span>
              </div>
            </li>
            <li>
              <div>
                <strong>OPERATING HOURS</strong>
                <p>
                  MON - FRI AM 09:30 - PM 05:30
                  <br />
                  LUNCH PM 12:00 - 1:00
                  <br />
                  SAT, SUN, HOLIDAY OFF
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>ACCOUNT INFO</strong>
                <p>
                  신한은행 12345678900
                  <br />
                  예금주 (주) EarF(어프)
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>COMPANY INFO</strong>
                <p>
                  회사 : (주) EarF(어프)
                  <br />
                  팀장 : 윤우정 <br />
                  팀원 : 김윤중, 노재열, 오창현, 윤성준, 이채연, 진호병
                  <br />
                  사업자등록번호 : [123-12-12345]
                  <br />
                  주소 : (04799)서울 성동구 아차산로17길 48
                  <br />
                  제휴문의 : 엘리스 / contact@elice.io
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.footer_etc}>
          <p>Copyright ⓒ 2023 - 2023 EarF Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
