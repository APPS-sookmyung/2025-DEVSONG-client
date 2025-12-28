import PostHeader from '@components/post/PostHeader';
import PostResumeHeader from '../layout/PostResumeHeader';
import PostContent from '@components/post/PostContent';
import PostActions from '@components/post/PostActions';
import CommentSection from '@components/post/CommentSection';
import CommentBar from '@components/post/CommentBar';
import {useEffect, useState} from 'react';
import {createComment, getPostDetail} from '@apis/posts';
import {useNavigate, useParams} from 'react-router-dom';
import PostLayout from '@components/post/PostLayout';

const Post = () => {
  const {id} = useParams(); // post id 받아오기
  const navigate = useNavigate();

  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);

  // 선택된 댓글
  const [activeCommentId, setActiveCommentId] = useState(null);

  const fetchPostDetail = async () => {
    const response = await getPostDetail(id);

    setPostData(response.data);
    setComments(response.data.comments);
  };

  useEffect(() => {
    fetchPostDetail();
  }, []);

  // 댓글 선택/해제 토글 핸들러
  const handleActiveComment = (commentId) => {
    if (activeCommentId === commentId) {
      setActiveCommentId(null);
    } else {
      setActiveCommentId(commentId);
    }
  };

  const onAddComment = async (content) => {
    const parentId = activeCommentId;

    try {
      const response = await createComment(postData.id, content, parentId);
      const newComment = response.data;
      console.log('댓글이 생성되었습니다:', response.data);
      // 3. 상태 업데이트 (불변성 유지)
      setComments((prevComments) => {
        // 일반 댓글
        if (newComment.parentId === null) {
          return [...prevComments, newComment];
        }

        // 대댓글
        return prevComments.map((comment) => {
          if (comment.commentId === newComment.parentId) {
            return {
              ...comment,
              children: [...(comment.children || []), newComment],
            };
          }
          return comment;
        });
      });
      console.log('댓글이 생성되었습니다:', comments);
      setActiveCommentId(null);
    } catch (error) {
      console.error('댓글을 생성하지 못했습니다.', error);
    }
  };

  const handlePostUpdate = () => {
    localStorage.setItem('isUpdate', true);
    localStorage.setItem('id', postData.id);
    localStorage.setItem('title', postData.title);
    localStorage.setItem('content', postData.content);
    localStorage.setItem('category', postData.category);

    navigate('/posts/write');
  };

  return (
    <>
      <PostResumeHeader isPost={true} />
      <PostLayout>
        <div className='relative flex flex-col w-full h-screen *:px-6 *:md:px-11'>
          <section className='flex flex-col flex-1 min-h-0 md:h-212.5 overflow-y-auto py-4 md:py-9'>
            <PostHeader
              postId={postData.id}
              title={postData.title}
              author={postData.username}
              major={postData.major}
              studentId={postData.studentId}
              category={postData.category}
              closed={postData.closed}
              isAuthor={postData.author}
              handlePostUpdate={handlePostUpdate}
            />
            <PostContent content={postData.content} />
            <PostActions
              postId={postData.id}
              isAuthor={postData.author}
              applied={postData.applied}
              likeCount={postData.likeCount}
              comment={postData.comment}
            />
            <section className='flex-1'>
              <CommentSection
                isAuthor={postData.author}
                comments={comments}
                onToggle={handleActiveComment}
                activeCommentId={activeCommentId}
              />
            </section>
          </section>

          <CommentBar onAddComment={onAddComment} />
        </div>
      </PostLayout>
    </>
  );
};

export default Post;
