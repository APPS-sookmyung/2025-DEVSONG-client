import React, {useState, useEffect} from 'react';
import editIcon from '../../assets/icons/editIcon.svg';

export default function StackModal({
  selectedStacks: initialStacks,
  closeModal,
  onSave,
}) {
  const [selectedStacks, setSelectedStacks] = useState([]);

  useEffect(() => {
    if (initialStacks) {
      setSelectedStacks(initialStacks);
    }
  }, [initialStacks]);

  const allStacks = [
    'Flutter',
    'Python',
    'JavaScript',
    'Java',
    'C',
    'C++',
    'Android',
    'iOS',
    'TypeScript',
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
    'TensorFlow',
    'PyTorch',
    'Git',
    'GitHub',
    'Firebase',
    'AWS',
    'Docker',
    'DB',
    'Figma',
    'Postman',
    'Notion',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'VS Code',
    'AI / 머신러닝',
  ];

  const toggleStack = (stack) => {
    setSelectedStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  };

  const handleClose = () => {
    onSave(selectedStacks);
    closeModal();
  };

  return (
    <div
      className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'
      onClick={handleClose}>
      <div
        className='bg-white p-6 rounded-xl w-96 max-h-[80vh] overflow-y-auto shadow-2xl'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>기술 스택</h2>
          <img
            src={editIcon}
            alt='닫기'
            className='w-6 h-6 cursor-pointer'
            onClick={handleClose}
          />
        </div>
        <div className='flex flex-wrap gap-2'>
          {allStacks.map((stack) => {
            const isSelected = selectedStacks.includes(stack);
            return (
              <span
                key={stack}
                onClick={() => toggleStack(stack)}
                className={`px-3 py-1 rounded-md text-xs cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-main-16 text-black'
                    : 'bg-grey-02 text-black-60'
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
