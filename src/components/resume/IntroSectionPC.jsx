import React, {useState, useEffect} from 'react';
import editIcon from '../../assets/icons/editIcon.svg';
import ResumeFormLayout from '../resume/ResumeFormLayout';
import ContentEditor from '../postForm/ContentEditor';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function IntroSectionPC({user, onUpdate}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(user.introduction || '');

  useEffect(() => {
    setContent(user.introduction || '');
  }, [user.introduction]);

  const handleEditClick = () => setIsEditing(true);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleCancel = () => {
    setIsEditing(false);
    setContent(user.introduction || '');
  };

  const handleSubmit = async () => {
    const success = await onUpdate({introduction: content});
    if (success) {
      setIsEditing(false);
    }
  };

  return (
    <div className='relative'>
      <div className='bg-white p-4 rounded-3xl shadow h-70 overflow-y-auto'>
        <div className='flex justify-between items-center mb-2'>
          <span className='font-semibold'>자기소개</span>
          <img
            src={editIcon}
            alt='편집'
            className='w-6 h-6 cursor-pointer'
            onClick={handleEditClick}
          />
        </div>

        <div className='prose text-sm'>
          {content ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          ) : (
            <p className='text-gray-400'>자기소개를 입력해주세요.</p>
          )}
        </div>
      </div>

      {isEditing && (
        <ResumeFormLayout>
          <div
            className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'
            onClick={handleCancel}>
            <div
              className='bg-white rounded-3xl w-150 p-6 flex flex-col'
              onClick={(e) => e.stopPropagation()}>
              <ContentEditor
                content={content}
                handleContentChange={handleContentChange}
                isModal={true}
              />

              <div className='flex justify-center gap-4 mt-6'>
                <button
                  className='bg-grey-02 text-black-60 px-10 py-1 rounded-lg font-semibold'
                  onClick={handleCancel}>
                  취소
                </button>
                <button
                  className='bg-main text-white px-10 py-1 rounded-lg font-semibold'
                  onClick={handleSubmit}>
                  등록
                </button>
              </div>
            </div>
          </div>
        </ResumeFormLayout>
      )}
    </div>
  );
}
