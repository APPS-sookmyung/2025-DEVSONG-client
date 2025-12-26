import React, {useState} from 'react';
// import ResumeHeaderMobile from '../components/resume/ResumeHeaderMobile';
import ProfileCardMobile from '../components/resume/ProfileCardMobile';
import IntroSectionMobile from '../components/resume/IntroSectionMobile';
import StackSectionMobile from '../components/resume/StackSectionMobile';
import InterestSectionMobile from '../components/resume/InterestSectionMobile';
import ProfileCardPC from '../components/resume/ProfileCardPC';
import IntroSectionPC from '../components/resume/IntroSectionPC';
import StackSectionPC from '../components/resume/StackSectionPC';
import InterestSectionPC from '../components/resume/InterestSectionPC';
import StackModal from '../components/common/StackModal';
import InterestModal from '../components/common/InterestModal';
import ProfileEditModal from '../components/resume/ProfileEditModal';
import {resume} from '../components/resume/dummy';
import PostResumeHeader from '../layout/PostResumeHeader';

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStackModalOpen, setIsStackModalOpen] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [user, setUser] = useState(resume);

  return (
    <div className='p-0 space-y-4 max-w-6xl mx-auto'>
      <div className='block md:hidden'>
        <PostResumeHeader />
        <ProfileCardMobile setIsModalOpen={setIsModalOpen} user={user} />
        <IntroSectionMobile user={user} />
        <StackSectionMobile
          setIsStackModalOpen={setIsStackModalOpen}
          user={user}
        />
        <InterestSectionMobile
          setIsInterestModalOpen={setIsInterestModalOpen}
          user={user}
        />
      </div>

      <div className='hidden md:flex gap-6 mr-40 ml-40'>
        <ProfileCardPC setIsModalOpen={setIsModalOpen} user={user} />
        <div className='flex-1 space-y-4 mt-15'>
          <IntroSectionPC user={user} />
          <StackSectionPC
            setIsStackModalOpen={setIsStackModalOpen}
            user={user}
          />
          <InterestSectionPC
            setIsInterestModalOpen={setIsInterestModalOpen}
            user={user}
          />
        </div>
      </div>

      {/* 모달들 */}
      {isStackModalOpen && (
        <StackModal
          selectedStacks={user.selectedStacks}
          closeModal={() => setIsStackModalOpen(false)}
        />
      )}

      {isInterestModalOpen && (
        <InterestModal
          selectedInterests={user.selectedInterests}
          closeModal={() => setIsInterestModalOpen(false)}
        />
      )}

      {isModalOpen && (
        <ProfileEditModal
          closeModal={() => setIsModalOpen(false)}
          user={user}
        />
      )}
    </div>
  );
}
