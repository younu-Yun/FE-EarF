import badgeDefault from 'assets/icons/badge01.svg';
import badgeNewPost from 'assets/icons/badge02.svg';
import badgeWrite3Times from 'assets/icons/badge03.svg';
import badgeTumbler from 'assets/icons/badge04.svg';
import badgePublicTrans from 'assets/icons/badge05.svg';
import badgeBasket from 'assets/icons/badge06.svg';
import badgeCommunity from 'assets/icons/badge07.svg';

export default function getBadgeImagePath(checkedBadge: string | Promise<string>) {
  switch (checkedBadge) {
    case '신규':
      return badgeDefault;
    case '최초':
      return badgeNewPost;
    case '꾸준':
      return badgeWrite3Times;
    case '텀블':
      return badgeTumbler;
    case '교통':
      return badgePublicTrans;
    case '버켓':
      return badgeBasket;
    case '기록왕':
      return badgeCommunity;
    default:
      return badgeDefault;
  }
}
