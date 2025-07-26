import RecruitLabel from '../common/RecruitLabel';
import CategoryLabel from '../common/CategoryLabel';
import comment from '../../assets/icons/comment.svg';
import heart from '../../assets/icons/heart.svg';

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
  title,
  content,
  author,
  createdAt,
  closed,
  category,
  countLike,
  countComment,
}) => {
  const isRecruiting = ['프로젝트', '스터디', '대외활동'].includes(category)
    ? true
    : false;
  return (
    <div className='flex flex-col bg-white max-w-86 min-h-32 px-4 py-3 rounded-xl gap-2 md:max-w-149 lg:max-w-212 lg:min-h-56'>
      {/* 라벨 영역 */}
      <div>
        <div className='flex gap-1'>
          <CategoryLabel category={category} />
          {isRecruiting && (
            <RecruitLabel status={closed ? '모집완료' : '모집중'} />
          )}
        </div>
      </div>
      <div className='text-sm font-bold'>{title}</div>
      <p className='text-[10px] text-black-60'>{content}</p>
      <div className='flex items-center justify-between'>
        <div className='flex text-[8px] text-black-40 gap-1'>
          <span>{author}</span>
          <span>{formatDate(createdAt)}</span>
        </div>
        <div className='flex text-[10px] gap-[6px]'>
          <span className='flex items-center'>
            <img src={heart} alt='좋아요' />
            {countLike}
          </span>
          <span className='flex items-center'>
            <img src={comment} alt='좋아요' />
            {countComment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
