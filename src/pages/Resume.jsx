import React, {useState, useEffect} from 'react';
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
import {resume as dummyResume} from '../components/resume/dummy';
import {getResumeApi, updateResumeApi} from '../apis/resume.js';
import PostResumeHeader from '../layout/PostResumeHeader';

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStackModalOpen, setIsStackModalOpen] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);

  const [user, setUser] = useState(dummyResume);

  const TECH_STACK_MAP = {
    FLUTTER: 'Flutter',
    PYTHON: 'Python',
    JAVASCRIPT: 'JavaScript',
    JAVA: 'Java',
    C: 'C',
    CPP: 'C++',
    ANDROID: 'Android',
    IOS: 'iOS',
    TYPESCRIPT: 'TypeScript',
    KOTLIN: 'Kotlin',
    SWIFT: 'Swift',
    GO: 'Go',
    RUST: 'Rust',
    HTML: 'HTML',
    CSS: 'CSS',
    REACT: 'React',
    VUE_JS: 'Vue.js',
    NEXT_JS: 'Next.js',
    NODE_JS: 'Node.js',
    EXPRESS: 'Express',
    SPRING: 'Spring',
    SPRING_BOOT: 'Spring Boot',
    DJANGO: 'Django',
    FLASK: 'Flask',
    TENSORFLOW: 'TensorFlow',
    PYTORCH: 'PyTorch',
    GIT: 'Git',
    GITHUB: 'GitHub',
    FIREBASE: 'Firebase',
    AWS: 'AWS',
    DOCKER: 'Docker',
    DB: 'DB',
    FIGMA: 'Figma',
    POSTMAN: 'Postman',
    NOTION: 'Notion',
    MYSQL: 'MySQL',
    POSTGRESQL: 'PostgreSQL',
    MONGODB: 'MongoDB',
    VS_CODE: 'VS Code',
    AI_ML: 'AI / 머신러닝',
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResumeApi();

      const uiStackList = (data.techStack || []).map(
        (enumVal) => TECH_STACK_MAP[enumVal] || enumVal
      );

      const formattedUser = {
        id: 1,
        profil: data.profileImage || dummyResume.profil,
        username: data.username,
        major: data.major,
        admissionYear: data.studentId
          ? String(data.studentId).substring(0, 2)
          : '00',
        githubId: data.githubId,
        bojId: data.bojId,
        introduction: data.content || '',
        selectedStacks: uiStackList,
        selectedInterests: data.interests || [],
      };
      setUser(formattedUser);
    };
    fetchData();
  }, []);

  const handleUpdate = async (updates) => {
    try {
      const nextUser = {...user, ...updates};
      setUser(nextUser);

      const finalTechStacks = nextUser.selectedStacks.map((uiLabel) => {
        const foundEnum = Object.keys(TECH_STACK_MAP).find(
          (key) => TECH_STACK_MAP[key] === uiLabel
        );
        return foundEnum || uiLabel;
      });

      const requestBody = {
        bojId: nextUser.bojId,
        githubId: nextUser.githubId,
        profileImage:
          nextUser.profil === dummyResume.profil ? null : nextUser.profil,
        content: nextUser.introduction,
        interests: nextUser.selectedInterests,
        techStack: finalTechStacks,
      };

      await updateResumeApi(requestBody);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className='p-0 space-y-4 max-w-6xl mx-auto'>
      {/* 모바일 뷰 */}
      <div className='block md:hidden'>
        <PostResumeHeader />
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

      {/* PC 뷰 */}
      <div className='hidden md:flex gap-6 mr-40 ml-40'>
        <ProfileCardPC setIsModalOpen={setIsModalOpen} user={user} />
        <div className='flex-1 space-y-4 mt-15'>
          <IntroSectionPC user={user} onUpdate={handleUpdate} />
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
          onSave={async (newStacks) => {
            const success = await handleUpdate({selectedStacks: newStacks});
            if (success) setIsStackModalOpen(false);
          }}
        />
      )}

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
