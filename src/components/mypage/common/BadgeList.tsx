import { badgeImg1, badgeImg2, badgeImg3, badgeImg4, badgeImg5, badgeImg6, badgeImg7 } from 'assets/images/badgeIndex';

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

// 임시로 만든 user 데이터
// 실제로는 api 요청을 통해서 가져옴
const user: User = {
  id: 'id',
  password: 'password',
  name: 'name',
  email: 'abc@def.com',
  phoneNumber: '123-4567-8901',
  profileImage: 'example.jpg',
  badges: [
    {
      type: '신규',
      ThumbBadge: '신규',
    },
    {
      type: '최초',
      ThumbBadge: '최초',
    },
  ],
  postNum: 10,
  tumblerNum: 2,
  transportNum: 5,
  basketNum: 3,
  refreshToken: 'exampleRefreshToken',
};

// 가져온 데이터에서 뱃지 타입이 있는지 확인하는 함수
function getBadges(user: User): string[] {
  const { badges } = user;
  const badgeTypes = badges.map((badge) => badge.type);
  return badgeTypes;
}

const badgeTypes = getBadges(user);
// console.log(badgeTypes); ['신규', '최초']
// ['신규', '최초', '연속', '텀블', '교통', '버켓', '커뮤'],

// initialBadgeList
// 후에 isGet 초기값을 모두 false로 변경
const BadgeList: BadgeInfo[] = [
  {
    type: '신규',
    name: '신규유저',
    isGet: true,
    url: badgeImg1,
    info: '반갑습니다! 회원님! 회원가입시 획득가능합니다.',
  },
  {
    type: '최초',
    name: '최초 작성',
    isGet: false,
    url: badgeImg2,
    info: '데일리 기록을 최초 작성 시 획득가능합니다.',
  },
  {
    type: '연속',
    name: '3회이상 연속 작성',
    isGet: true,
    url: badgeImg3,
    info: '데일리 기록을 3회 이상 작성 시 획득가능합니다.',
  },
  {
    type: '텀블',
    name: '텀블러 사용 3회',
    isGet: false,
    url: badgeImg4,
    info: '텀블러 태그 3회 이상 작성 시 획득 가능합니다.',
  },
  {
    type: '교통',
    name: '대중교통 이용 3회',
    isGet: false,
    url: badgeImg5,
    info: '대중교통 태그 3회 이상 작성 시 획득 가능합니다.',
  },
  {
    type: '버켓',
    name: '채식하기 3회',
    isGet: true,
    url: badgeImg6,
    info: '대중교통 태그 3회 이상 작성 시 획득 가능합니다.',
  },
  {
    type: '커뮤',
    name: '커뮤니티 포스팅 3회',
    isGet: true,
    url: badgeImg7,
    info: '커뮤니티 게시물을 3회 이상 작성 시 획득 가능합니다.',
  },
];

// 가져온 type을 바탕으로 기존의 BadgeList를 업데이트(있을 경우 true로 변경)
function updateBadgeList(badgeTypes: string[], BadgeList: BadgeInfo[]): BadgeInfo[] {
  return BadgeList.map((badge) => {
    if (badgeTypes.includes(badge.type)) {
      return { ...badge, isGet: true };
    }
    return badge;
  });
}
const updatedBadgeList = updateBadgeList(badgeTypes, BadgeList);

export default updatedBadgeList;
