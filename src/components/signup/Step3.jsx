import Button from '@components/common/Button';
import React, {useState} from 'react';

const Step3 = ({handleNextStep}) => {
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

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

  const toggleStack = (stack) => {
    setSelectedStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  };

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

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold leading-6 text-base md:text-xl mb-4 md:mb-5'>
        추가 정보 입력
      </h2>
      <div>
        <h2 className='text-base font-semibold mb-2'>기술 스택</h2>
        <div className='flex flex-wrap gap-2'>
          {allStacks.map((stack) => {
            const isSelected = selectedStacks.includes(stack);
            return (
              <span
                key={stack}
                onClick={() => toggleStack(stack)}
                className={`px-3 py-1 rounded-md text-xs cursor-pointer ${
                  isSelected ? 'bg-main-16' : 'bg-grey-02'
                }`}>
                {stack}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className='text-base font-semibold mt-5 mb-2'>관심 분야</h2>
        <div className='flex flex-wrap gap-2'>
          {allInterests.map((interest) => {
            const isSelected = selectedInterests.includes(interest);
            return (
              <span
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={`px-3 py-1 rounded-md text-xs cursor-pointer ${
                  isSelected ? 'bg-main-16' : 'bg-grey-02'
                }`}>
                {interest}
              </span>
            );
          })}
        </div>
      </div>
      <div className='flex justify-between items-center mt-6'>
        <button className='text-base text-black-60'>건너뛰기</button>
        <Button
          onClick={handleNextStep}
          classname='w-28 h-12 px-4 py-2'
          variant='primary'>
          다음
        </Button>
      </div>
    </div>
  );
};

export default Step3;
