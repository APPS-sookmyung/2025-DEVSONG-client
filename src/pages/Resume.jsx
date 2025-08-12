import React, {useState} from 'react';
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

export default function Resume() {
  // 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStackModalOpen, setIsStackModalOpen] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);

  const allStacks = [
    'Flutter',
    'Python',
    'Java Script',
    'Java',
    'C',
    'C++',
    'Android',
    'IOS',
    'Type Script',
    'Kotlin',
    'Swift',
    'Go',
    'Rust',
    'HTML',
    'CSS',
    'React',
    'Vue.js',
    'Next.js',
    'Node.js',
    'Express',
    'Spring',
    'Spring Boot',
    'Django',
    'Flask',
    'Tensor Flow',
    'PyTorch',
    'Git',
    'Github',
    'Firebase',
    'AWS',
    'Docker',
    'DB',
    'Figma',
    'Postman',
    'Notion',
    'MySQL',
    'PostgrSQL',
    'MongoDB',
    'VS Code',
  ];
  const [selectedStacks, setSelectedStacks] = useState([
    'Flutter',
    'Android',
    'IOS',
    'Spring Boot',
    'DB',
    'AWS',
  ]);

  const allInterests = [
    '웹 프론트엔드',
    '웹 백엔드',
    '모바일 프로그래밍',
    'Android',
    'IOS',
    '게임 개발',
    '데이터 분석',
    'AI / 머신러닝',
    '임베디드 / IOT',
    '블록체인',
    '알고리즘 / 자료구조',
    '네트워크 / 보안',
    '시스템 프로그래밍',
    '풀스택',
    '운영체제 / 컴파일러',
    'DB',
    '스타트업 창업 / 취업',
    '연구 / 대학원',
    '해커톤 / 공모전',
    '오픈소스 기여',
    'UX/UI',
  ];

  const [selectedInterests, setSelectedInterests] = useState([
    '모바일 프로그래밍',
    'Android',
    '웹 프론트엔드',
    '풀스택',
  ]);

  const toggleStack = (stack) => {
    setSelectedStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  };

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className='p-0 space-y-4 max-w-6xl mx-auto'>
      {/* 모바일 버전 */}
      <div className='block md:hidden'>
        <ResumeHeaderMobile />
        <ProfileCardMobile setIsModalOpen={setIsModalOpen} />
        <IntroSectionMobile />
        <StackSectionMobile
          selectedStacks={selectedStacks}
          setIsStackModalOpen={setIsStackModalOpen}
        />
        <InterestSectionMobile
          selectedInterests={selectedInterests}
          setIsInterestModalOpen={setIsInterestModalOpen}
        />
      </div>

      {/* PC 버전 */}
      <div className='hidden md:flex gap-6 mr-40 ml-40'>
        <ProfileCardPC setIsModalOpen={setIsModalOpen} />
        <div className='flex-1 space-y-4 mt-15'>
          <IntroSectionPC />
          <StackSectionPC
            selectedStacks={selectedStacks}
            setIsStackModalOpen={setIsStackModalOpen}
          />
          <InterestSectionPC
            selectedInterests={selectedInterests}
            setIsInterestModalOpen={setIsInterestModalOpen}
          />
        </div>
      </div>

      {/* 모달들 */}
      {isStackModalOpen && (
        <StackModal
          allStacks={allStacks}
          selectedStacks={selectedStacks}
          toggleStack={toggleStack}
          closeModal={() => setIsStackModalOpen(false)}
        />
      )}

      {isInterestModalOpen && (
        <InterestModal
          allInterests={allInterests}
          selectedInterests={selectedInterests}
          toggleInterest={toggleInterest}
          closeModal={() => setIsInterestModalOpen(false)}
        />
      )}

      {isModalOpen && (
        <ProfileEditModal closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
