import { userInfo } from 'api/fetcher';
import { useEffect, useState } from 'react';
import getBadgeImagePath from 'utils/getBadgeImagePath';

interface BadgeInfo {
  type: string;
  name: string;
  isGet: boolean;
  url: string;
  info: string;
}

interface Badge {
  type: string;
  ThumbBadge: string;
}

interface User {
  id: string;
  password: string;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: string;
  badges: Badge[];
  postNum: number;
  tumblerNum: number;
  transportNum: number;
  basketNum: number;
  refreshToken: string;
}

const initialBadgeList: BadgeInfo[] = [
  {
    type: '신규',
    name: '신규유저',
    isGet: true,
    url: getBadgeImagePath('신규'),
    info: '반갑습니다! 회원님! 회원가입시 획득가능합니다.',
  },
  {
    type: '최초',
    name: '최초 작성',
    isGet: false,
    url: getBadgeImagePath('최초'),
    info: '데일리 기록을 최초 작성 시 획득가능합니다.',
  },
  {
    type: '꾸준',
    name: '데일리 기록 5회',
    isGet: false,
    url: getBadgeImagePath('연속'),
    info: '데일리 기록을 5회 이상 작성 시 획득가능합니다.',
  },
  {
    type: '텀블',
    name: '텀블러 사용 3회',
    isGet: false,
    url: getBadgeImagePath('텀블'),
    info: '텀블러 태그 3회 이상 작성 시 획득 가능합니다.',
  },
  {
    type: '교통',
    name: '대중교통 이용 3회',
    isGet: false,
    url: getBadgeImagePath('교통'),
    info: '대중교통 태그 3회 이상 작성 시 획득 가능합니다.',
  },
  {
    type: '버켓',
    name: '장바구니 사용 3회',
    isGet: false,
    url: getBadgeImagePath('버켓'),
    info: '장바구니 태그 3회 이상 작성 시 획득 가능합니다.',
  },
  {
    type: '기록왕',
    name: '커뮤니티 포스팅 10회',
    isGet: false,
    url: getBadgeImagePath('커뮤'),
    info: '커뮤니티 게시물을 10회 이상 작성 시 획득 가능합니다.',
  },
];

function getBadgeTypes(user: User): string[] {
  const { badges } = user;
  const badgeTypes = badges.map((badge) => String(badge));
  return badgeTypes;
}

function updateBadgeList(badgeTypes: string[], badgeList: BadgeInfo[]): BadgeInfo[] {
  return badgeList.map((badge) => {
    if (badgeTypes.includes(badge.type)) {
      return { ...badge, isGet: true };
    }
    return badge;
  });
}

const BadgeList = () => {
  const [badgeList, setBadgeList] = useState(initialBadgeList);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData: User = (await userInfo()) as User;
        const badgeTypes = getBadgeTypes(userData);
        const updatedBadges = updateBadgeList(badgeTypes, badgeList);
        setBadgeList((prevBadge) => updatedBadges);
        console.log(userData);
        console.log(updatedBadges);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    fetchUserInfo();
  }, []);

  return badgeList;
};

export default BadgeList;
