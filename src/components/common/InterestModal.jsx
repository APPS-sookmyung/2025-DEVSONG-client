import React, {useState} from 'react';
import editIcon from '../../assets/icons/editIcon.svg';

export default function InterestModal({
  selectedInterests: initialInterests,
  closeModal,
}) {
  const [selectedInterests, setSelectedInterests] = useState(initialInterests);

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
    <div
      className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'
      onClick={closeModal}>
      <div
        className='bg-white p-6 rounded-xl w-96 max-h-[80vh] overflow-y-auto shadow-2xl'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>관심 분야</h2>
          <img
            src={editIcon}
            alt='닫기'
            className='w-6 h-6 cursor-pointer'
            onClick={closeModal}
          />
        </div>
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
    </div>
  );
}
