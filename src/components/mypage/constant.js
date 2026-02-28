import my from '@assets/icons/nav_my.svg';
import apply from '@assets/icons/apply.svg';
import editIcon from '@assets/icons/editIcon.svg';
import commentIcon from '@assets/icons/comment.svg';
import likedIcon from '@assets/icons/heart.svg';

export const MENU_OPTIONS = [
  {
    id: 'edit',
    label: '프로필 수정',
    icon: my,
  },
  {
    id: 'written',
    label: '내가 쓴 글',
    icon: editIcon,
  },
  {
    id: 'comments',
    label: '댓글 단 글',
    icon: commentIcon,
  },
  {
    id: 'liked',
    label: '좋아요한 글',
    icon: likedIcon,
  },
  {
    id: 'applied',
    label: '지원한 글',
    icon: apply,
  },
];
