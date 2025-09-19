import RecruitLabel from '../common/RecruitLabel';
import CategoryLabel from '../common/CategoryLabel';
import comment from '../../assets/icons/comment.svg';
import heart from '../../assets/icons/heart.svg';
import {useNavigate} from 'react-router-dom';

const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  const currentDate = new Date();
  const updated =
    currentDate.toDateString() === date.toDateString()
      ? date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
      : date
          .toLocaleDateString('ko-KR', {
            month: '2-digit',
            day: '2-digit',
          })
          .replaceAll('.', '')
          .replace(' ', '/');

  return updated;
};

const PostCard = ({
  id,
  title,
  content,
  author,
  createdAt,
  closed,
  category,
  countLike,
  countComment,
}) => {
  const navigate = useNavigate();
  const isRecruiting = ['프로젝트', '스터디', '대외활동'].includes(category)
    ? true
    : false;
  return (
    <div
      onClick={() => navigate(`/post/${id}`)}
      className='bg-white flex flex-col justify-center rounded-xl shadow-box w-86 h-32 px-4 py-3 gap-2 md:w-149 md:h-44 md:px-5.5 md:py-4.5 lg:w-212 lg:h-56 lg:gap-4 lg:px-7 lg:py-6'>
      <div>
        <div className='flex gap-1'>
          <CategoryLabel category={category} />
          {isRecruiting && <RecruitLabel closed={closed} />}
        </div>
      </div>
      <h3 className='font-bold text-sm md:text-lg lg:text-xl'>{title}</h3>
      <p className='text-black-60 text-[10px] md:text-sm lg:text-lg'>
        {content}
      </p>
      <div className='flex items-center justify-between'>
        <div className='flex text-black-40 gap-1 text-[8px] md:text-xs lg:gap-2 lg:text-base'>
          <span>{author}</span>
          <span>{formatDate(createdAt)}</span>
        </div>
        <div className='flex text-[10px] gap-[6px] md:text-[13px] lg:gap-2 lg:text-base'>
          <span className='flex items-center'>
            <img
              src={heart}
              className='md:w-5 md:h-5 lg:w-6 lg:h-6'
              alt='좋아요'
            />
            {countLike}
          </span>
          <span className='flex items-center'>
            <img
              src={comment}
              className='md:w-5 md:h-5 lg:w-6 lg:h-6'
              alt='좋아요'
            />
            {countComment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
