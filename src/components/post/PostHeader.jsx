import RecruitLabel from '../common/RecruitLabel';
import CategoryLabel from '../common/CategoryLabel';
import PostHeaderActions from './PostHeaderActions';

const PostHeader = ({
  title,
  author,
  category,
  closed,
  major,
  studentId,
  isAuthor,
}) => {
  const year = studentId?.toString().slice(0, 2);
  return (
    <div>
      <PostHeaderActions isAuthor={isAuthor} />
      <div className='flex items-center justify-start gap-3 pb-2.25 md:pb-4'>
        <CategoryLabel category={category} />
        <RecruitLabel status={closed} />
      </div>
      <h1 className='font-bold text-lg pb-3 leading-none md:text-2xl md:pb-3.25'>
        {title}
      </h1>
      <p className='text-black-40 text-xs font-medium pb-4 md:pb-5'>
        {`${major} ${year}학번 ${author}`}
      </p>
    </div>
  );
};

export default PostHeader;
