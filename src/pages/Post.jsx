import PostHeader from '@components/post/PostHeader';
import PostResumeHeader from '../layout/PostResumeHeader';
import PostContent from '@components/post/PostContent';
import PostActions from '@components/post/PostActions';
import CommentSection from '@components/post/CommentSection';
import {useCallback, useEffect, useState} from 'react';
import {createComment, getPostDetail} from '@apis/posts';
import {useNavigate, useParams} from 'react-router-dom';
import PostLayout from '@components/post/PostLayout';
import MessageInput from '@components/common/MessageInput';

const Post = () => {
  const {id} = useParams(); // post id 받아오기
  const navigate = useNavigate();

  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);
  const [activeCommentId, setActiveCommentId] = useState(null); // 선택된 댓글
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 게시글 상세 정보 불러오기
  const fetchPostDetail = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getPostDetail(id);
      setPostData(response.data);
      setComments(response.data.comments ?? []);
    } catch (error) {
      setError('게시글 정보를 불러오는 데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPostDetail();
  }, [fetchPostDetail]);

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
      setPostData((prev) => ({
        ...prev,
        comment: (prev.comment || 0) + 1,
      }));

      setActiveCommentId(null);
      return true;
    } catch (error) {
      console.error('댓글을 생성하지 못했습니다.', error);
      return false;
    }
  };

  // 좋아요 토글 핸들러
  const handleLikeToggle = (isLiked, nextCount) => {
    setPostData((prev) => ({
      ...prev,
      liked: isLiked,
      likeCount: nextCount,
    }));
  };

  // 게시글 마감 핸들러
  const handlePostClose = () => {
    setPostData((prev) => ({
      ...prev,
      closed: true,
    }));
  };

  const handlePostApply = () => {
    setPostData((prev) => ({
      ...prev,
      applied: true,
    }));
  };

  // 게시글 수정 페이지로 이동
  const handlePostUpdate = () => {
    navigate('/posts/write', {
      state: {
        isUpdate: true,
        id: postData.id,
        title: postData.title,
        content: postData.content,
        category: postData.category,
      },
    });
  };

  return (
    <>
      <PostResumeHeader
        isPost={true}
        isAuthor={postData.author}
        postId={postData.id}
        handlePostUpdate={handlePostUpdate}
        handlePostClose={handlePostClose}
      />
      <PostLayout>
        {isLoading && (
          <p className='p-10 text-center text-black-40'>로딩 중...</p>
        )}
        {error && <p className='p-10 text-center text-red-500'>{error}</p>}
        {!isLoading && !error && (
          <div className='relative flex flex-col w-full h-screen *:px-6 *:md:px-11'>
            <section className='flex flex-col flex-1 min-h-0 md:h-269.5 overflow-y-auto py-4 md:py-9 scroll-smooth'>
              <PostHeader
                {...postData}
                isAuthor={postData.author}
                handlePostUpdate={handlePostUpdate}
                handlePostClose={handlePostClose}
              />
              <PostContent content={postData.content} />
              <PostActions
                {...postData}
                isAuthor={postData.author}
                onLikeToggle={handleLikeToggle}
                handlePostApply={handlePostApply}
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
            <MessageInput onSubmitMessage={onAddComment} />
          </div>
        )}
      </PostLayout>
    </>
  );
};

export default Post;
