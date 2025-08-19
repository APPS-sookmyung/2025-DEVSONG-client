import RecruitLabel from '../common/RecruitLabel';
import CategoryLabel from '../common/CategoryLabel';

const PostHeader = ({title, author}) => {
  return (
    <div>
      <div>
        <CategoryLabel category={'프로젝트'} />
        <RecruitLabel status={'모집중'} />
      </div>
      <h1>{title}</h1>
      <p>{author}</p>
    </div>
  );
};

export default PostHeader;
