import badgeDefault from 'assets/icons/badgeDefault.svg';
import badgeNewPost from 'assets/icons/badgeNewPost.svg';
import badgeWrite3Times from 'assets/icons/badgeWrite3Times.svg';
import badgeTumbler from 'assets/icons/badgeTumbler.svg';
import badgePublicTrans from 'assets/icons/badgePublicTrans.svg';
import badgeBasket from 'assets/icons/badgeBasket.svg';
import badgeCommunity from 'assets/icons/badgeCommunity.svg';

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
    case '텀블러':
      return badgeTumbler;
    case '교통':
      return badgePublicTrans;
    case '대중교통':
      return badgePublicTrans;
    case '버켓':
      return badgeBasket;
    case '장바구니':
      return badgeBasket;
    case '기록왕':
      return badgeCommunity;
    default:
      return badgeDefault;
  }
}
