import { useState } from 'react';
import styles from './Badge.module.scss';

interface Badge {
  name: string;
  isGet: boolean;
}

const BADGE_LIST: Badge[] = [
  {
    name: '신규유저',
    isGet: true,
  },
  {
    name: '최초 작성',
    isGet: false,
  },
  {
    name: '3회이상 연속 작성',
    isGet: false,
  },
  {
    name: '텀블러 사용 3회',
    isGet: false,
  },
  {
    name: '대중교통 이용 3회',
    isGet: false,
  },
  {
    name: '채식하기 3회',
    isGet: false,
  },
  {
    name: '커뮤니티 포스팅 3회',
    isGet: false,
  },
];

function Badge() {
  const [badges, setBadges] = useState(BADGE_LIST);
  // user에 저장된 badge를 가져와서 보여줌 useState 사용?
  // 전체 뱃지 리스트를 먼저 화면에 뿌려줌
  // 상태 값이 변경됨에 따라 뱃지의 활성 상태를 보여줌
  // 이를 다시 서버로 전송?? 언제 서버로 데이터를 넘겨줄 지 로직 설정
  return (
    <div className={styles.container}>
      {badges.map((badge, index) => (
        <div key={index} className={styles.item}>
          <div>{badge.name}</div>
          <div>{badge.isGet.toString()}</div>
        </div>
      ))}
    </div>
  );
}

export default Badge;
