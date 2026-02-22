import React, {useState, useRef} from 'react';
import profil from '../../assets/image/profil.svg';
import whiteEditIcon from '../../assets/icons/whiteEditIcon.svg';
import {uploadProfileImageApi} from '../../apis/resume';

export default function ProfileEditModal({closeModal, user, onSave}) {
  const [githubId, setGithubId] = useState(user.githubId || '');
  const [bojId, setBojId] = useState(user.bojId || '');
  const [previewImage, setPreviewImage] = useState(user.profil || profil);
  const [uploadedUrl, setUploadedUrl] = useState(user.profil || '');

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const localPreview = URL.createObjectURL(file);
    setPreviewImage(localPreview);

    try {
      const data = await uploadProfileImageApi(file);
      setUploadedUrl(data.profileImage);
    } catch (err) {
      alert('이미지 업로드 실패');
    }
  };

  const handleSave = async () => {
    const updates = {
      githubId,
      bojId,
      profil: uploadedUrl || user.profil,
    };

    const success = await onSave(updates);

    if (success) {
      closeModal();
      window.location.reload(); // 저장 시 새로고침
    }
  };

  const handleBackdropClick = () => {
    closeModal(); // 배경 클릭 시 그냥 닫기
  };

  return (
    <div
      className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'
      onClick={handleBackdropClick}>
      <div
        className='bg-white p-6 rounded-xl w-80 space-y-4 shadow-2xl'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col items-center'>
          <div className='relative w-24 h-24 rounded-full'>
            <img
              src={previewImage}
              alt='프로필'
              className='w-full h-full object-cover rounded-full'
            />

            <input
              type='file'
              accept='image/*'
              ref={fileInputRef}
              onChange={handleFileChange}
              className='hidden'
            />

            <img
              src={whiteEditIcon}
              alt='프로필 편집'
              onClick={handleIconClick}
              className='absolute bottom-0 right-2 w-5 h-5 rounded-full bg-main cursor-pointer'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Github ID</label>
          <input
            type='text'
            value={githubId}
            onChange={(e) => setGithubId(e.target.value)}
            className='w-full p-2 rounded bg-grey-02 outline-none focus:ring-1 focus:ring-main'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>BOJ 핸들</label>
          <input
            type='text'
            value={bojId}
            onChange={(e) => setBojId(e.target.value)}
            className='w-full p-2 rounded bg-grey-02 outline-none focus:ring-1 focus:ring-main'
          />
        </div>

        <div className='flex justify-between mt-4'>
          <button
            onClick={closeModal}
            className='w-1/2 p-2 bg-grey-02 rounded mr-2'>
            취소
          </button>
          <button
            onClick={handleSave}
            className='w-1/2 p-2 bg-main text-white rounded'>
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
