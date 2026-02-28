import commentIcon from '@assets/icons/comment.svg';
import heartIcon from '@assets/icons/heart.svg';
import {Link, useNavigate} from 'react-router-dom';
import CategoryLabel from '@components/common/CategoryLabel';
import RecruitLabel from '@components/common/RecruitLabel';
import {formatDate} from '@lib/formatDate';
import removeMd from 'remove-markdown';

const PostCard = ({
  id,
  title,
  preview,
  username,
  category,
  createdAt,
  closed,
  likeCount,
  comment,
  variant = 'default',
}) => {
  const navigate = useNavigate();
  const isRecruiting = ['project', 'study', 'extra'].includes(category)
    ? true
    : false;

  const cardSizeClasses = {
    default: 'w-86 h-32 md:w-149 md:h-44 lg:w-212 lg:h-56',
    flex: 'w-full h-auto [&_h3]:line-clamp-1 [&_p]:line-clamp-1',
  };

  return (
    <Link
      to={`/post/${id}`}
      className={`cursor-pointer bg-white flex flex-col justify-center rounded-xl shadow-box px-4 py-3 gap-2 md:px-5.5 md:py-4.5 lg:gap-4 lg:px-7 lg:py-6 ${cardSizeClasses[variant]}`}>
      {/* 카테고리와 모집 상태 라벨 */}
      <div className='flex gap-2.5'>
        <CategoryLabel category={category} />
        {isRecruiting && <RecruitLabel closed={closed} />}
      </div>

      {/* 제목과 미리보기 텍스트 */}
      <h3 className='font-bold text-sm md:text-lg lg:text-xl'>{title}</h3>
      <p className='text-black-60 text-[10px] md:text-sm lg:text-lg'>
        {removeMd(preview)}
      </p>

      {/* 작성자, 작성일, 좋아요 수, 댓글 수 */}
      <div className='flex items-center justify-between'>
        <div className='flex text-black-40 gap-1 text-[8px] md:text-xs lg:gap-2 lg:text-base'>
          <span>{username}</span>
          <span>{formatDate(createdAt)}</span>
        </div>
        <div className='flex text-[10px] gap-1.5 md:text-[13px] lg:gap-2 lg:text-base'>
          <span className='flex items-center'>
            <img
              src={heartIcon}
              className='md:w-5 md:h-5 lg:w-6 lg:h-6'
              alt='좋아요'
            />
            {likeCount}
          </span>
          <span className='flex items-center'>
            <img
              src={commentIcon}
              className='md:w-5 md:h-5 lg:w-6 lg:h-6'
              alt='댓글'
            />
            {comment}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
