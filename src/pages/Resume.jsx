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
import {useParams} from 'react-router-dom';
import {getApplicantResume} from '../apis/posts';

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStackModalOpen, setIsStackModalOpen] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [user, setUser] = useState(dummyResume);
  const {postId, applicantId} = useParams();
  const isApplicantResume = !!applicantId;

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

  const INTEREST_MAP = {
    WEB_FRONTEND: '웹 프론트엔드',
    WEB_BACKEND: '웹 백엔드',
    MOBILE_DEVELOPMENT: '모바일 프로그래밍',
    ANDROID: 'Android',
    IOS: 'iOS',
    GAME: '게임 개발',
    DATA_ANALYTICS: '데이터 분석',
    AI_ML: 'AI / 머신러닝',
    EMBEDDED_SYSTEMS: '임베디드 / IoT',
    BLOCKCHAIN: '블록체인',
    ALGORITHMS_DATA_STRUCTURES: '알고리즘 / 자료구조',
    NETWORK_SECURITY: '네트워크 / 보안',
    SYSTEM_PROGRAMMING: '시스템 프로그래밍',
    FULLSTACK: '풀스택',
    OS_COMPILERS: 'OS / 컴파일러',
    DATABASE: '데이터베이스',
    STARTUP: '스타트업',
    RESEARCH: '연구 / 대학원',
    HACKATHON: '해커톤',
    OPEN_SOURCE: '오픈소스',
    UX_UI: 'UX / UI',
  };

  useEffect(() => {
    const fetchData = async () => {
      let data;

      if (postId && applicantId) {
        // 지원자 이력서 조회
        data = await getApplicantResume(postId, applicantId);
      } else {
        // 내 이력서 조회
        data = await getResumeApi();
      }

      const uiStackList = (data.techStack || []).map(
        (enumVal) => TECH_STACK_MAP[enumVal] || enumVal
      );

      const uiInterestList = (data.interests || []).map(
        (enumVal) => INTEREST_MAP[enumVal] || enumVal
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
        selectedInterests: uiInterestList,
      };

      setUser(formattedUser);
    };

    fetchData();
  }, [postId, applicantId]);

  const handleUpdate = async (updates) => {
    try {
      const nextUser = {...user, ...updates};

      const finalInterests = (nextUser.selectedInterests || []).map(
        (uiLabel) =>
          Object.keys(INTEREST_MAP).find(
            (key) => INTEREST_MAP[key] === uiLabel
          ) || uiLabel
      );

      const finalTechStacks = (nextUser.selectedStacks || []).map(
        (uiLabel) =>
          Object.keys(TECH_STACK_MAP).find(
            (key) => TECH_STACK_MAP[key] === uiLabel
          ) || uiLabel
      );

      await updateResumeApi({
        bojId: nextUser.bojId,
        githubId: nextUser.githubId,
        profileImage: nextUser.profil,
        content: nextUser.introduction,
        interests: finalInterests,
        techStack: finalTechStacks,
      });

      setUser(nextUser);

      return true;
    } catch (error) {
      return false;
    }
  };
  return (
    <div className='p-0 space-y-4 max-w-6xl mx-auto'>
      <div className='block md:hidden'>
        <PostResumeHeader />
        <ProfileCardMobile
          setIsModalOpen={setIsModalOpen}
          user={user}
          isApplicantResume={isApplicantResume}
        />
        <IntroSectionMobile
          user={user}
          onUpdate={handleUpdate}
          isApplicantResume={isApplicantResume}
        />
        <StackSectionMobile
          setIsStackModalOpen={setIsStackModalOpen}
          user={user}
          isApplicantResume={isApplicantResume}
        />
        <InterestSectionMobile
          setIsInterestModalOpen={setIsInterestModalOpen}
          user={user}
          isApplicantResume={isApplicantResume}
        />
      </div>

      <div className='hidden md:flex gap-6 mr-40 ml-40'>
        <ProfileCardPC
          setIsModalOpen={setIsModalOpen}
          user={user}
          isApplicantResume={isApplicantResume}
        />
        <div className='flex-1 space-y-4 mt-15'>
          <IntroSectionPC
            user={user}
            onUpdate={handleUpdate}
            isApplicantResume={isApplicantResume}
          />
          <StackSectionPC
            setIsStackModalOpen={setIsStackModalOpen}
            user={user}
            isApplicantResume={isApplicantResume}
          />
          <InterestSectionPC
            setIsInterestModalOpen={setIsInterestModalOpen}
            user={user}
            isApplicantResume={isApplicantResume}
          />
        </div>
      </div>

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
