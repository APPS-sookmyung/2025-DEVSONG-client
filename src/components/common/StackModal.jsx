import React, {useState} from 'react';
import editIcon from '../../assets/icons/editIcon.svg';

export default function StackModal({
  selectedStacks: initialStacks,
  closeModal,
}) {
  const [selectedStacks, setSelectedStacks] = useState(initialStacks);

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

  return (
    <div
      className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'
      onClick={closeModal}>
      <div
        className='bg-white p-6 rounded-xl w-96 max-h-[80vh] overflow-y-auto shadow-2xl'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>기술 스택</h2>
          <img
            src={editIcon}
            alt='닫기'
            className='w-6 h-6 cursor-pointer'
            onClick={closeModal}
          />
        </div>
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
    </div>
  );
}
