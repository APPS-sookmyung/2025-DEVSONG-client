import React, {useState, useEffect} from 'react';
import ResumeHeaderMobile from '../components/resume/ResumeHeaderMobile';
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
import {resume as dummyResume} from '../components/resume/dummy'; // 초기값용 더미
import {getResumeApi, updateResumeApi} from '../apis/resume.js'; // API 연결

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStackModalOpen, setIsStackModalOpen] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);

  // 초기값은 더미 데이터로 채워두되, 나중에 API 데이터로 덮어씌움
  const [user, setUser] = useState(dummyResume);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResumeApi();

      const formattedUser = {
        id: 1,
        profil: data.profileImage || dummyResume.profil,
        username: data.username,
        major: data.major,
        admissionYear: String(data.studentId).substring(0, 2),
        githubId: data.githubId,
        bojId: data.bojId,

        introduction: data.content || '',
        selectedStacks: data.techStack,
        selectedInterests: data.interests,
      };

      setUser(formattedUser);
    };

    fetchData();
  }, []);

  const handleUpdate = async (updates) => {
    const updatedUser = {...user, ...updates};

    const requestBody = {
      profileImage:
        updatedUser.profil === dummyResume.profil ? null : updatedUser.profil,
      interests: updatedUser.selectedInterests,
      techStack: updatedUser.selectedStacks,
    };

    await updateResumeApi(requestBody);

    setUser(updatedUser);
    return true;
  };

  return (
    <div className='p-0 space-y-4 max-w-6xl mx-auto'>
      {/* 모바일 */}
      <div className='block md:hidden'>
        <ResumeHeaderMobile />
        <ProfileCardMobile setIsModalOpen={setIsModalOpen} user={user} />
        <IntroSectionMobile user={user} onUpdate={handleUpdate} />
        <StackSectionMobile
          setIsStackModalOpen={setIsStackModalOpen}
          user={user}
        />
        <InterestSectionMobile
          setIsInterestModalOpen={setIsInterestModalOpen}
          user={user}
        />
      </div>

      {/* PC */}
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

      {/* 기술 스택 수정 모달 */}
      {isStackModalOpen && (
        <StackModal
          selectedStacks={user.selectedStacks}
          closeModal={() => setIsStackModalOpen(false)}
          onSave={async (newStacks) => {
            const success = await handleUpdate({selectedStacks: newStacks});
            if (success) setIsStackModalOpen(false);
          }}
        />
      )}

      {/* 관심 분야 수정 모달 */}
      {isInterestModalOpen && (
        <InterestModal
          selectedInterests={user.selectedInterests}
          closeModal={() => setIsInterestModalOpen(false)}
          onSave={async (newInterests) => {
            const success = await handleUpdate({
              selectedInterests: newInterests,
            });
            if (success) setIsInterestModalOpen(false);
          }}
        />
      )}

      {/* 프로필 수정 모달 */}
      {isModalOpen && (
        <ProfileEditModal
          closeModal={() => setIsModalOpen(false)}
          user={user}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
}
