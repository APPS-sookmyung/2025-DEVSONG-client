// import React, {useState} from 'react';
// import back from '../assets/icons/back2.svg';
// import vertical_ellipsis from '../assets/icons/vertical_ellipsis.svg';
// import editIcon from '../assets/icons/editIcon.svg';
// import messageIcon from '../assets/icons/messageIcon.svg';
// import whiteEditIcon from '../assets/icons/whiteEditIcon.svg';
// import profil from '../assets/image/profil.svg';

// const Resume = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isStackModalOpen, setIsStackModalOpen] = useState(false);
//   const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);

//   const allStacks = [
//     'Flutter',
//     'Python',
//     'Java Script',
//     'Java',
//     'C',
//     'C++',
//     'Android',
//     'IOS',
//     'Type Script',
//     'Kotlin',
//     'Swift',
//     'Go',
//     'Rust',
//     'HTML',
//     'CSS',
//     'React',
//     'Vue.js',
//     'Next.js',
//     'Node.js',
//     'Express',
//     'Spring',
//     'Spring Boot',
//     'Django',
//     'Flask',
//     'Tensor Flow',
//     'PyTorch',
//     'Git',
//     'Github',
//     'Firebase',
//     'AWS',
//     'Docker',
//     'DB',
//     'Figma',
//     'Postman',
//     'Notion',
//     'MySQL',
//     'PostgrSQL',
//     'MongoDB',
//     'VS Code',
//   ];

//   const [selectedStacks, setSelectedStacks] = useState([
//     'Flutter',
//     'Android',
//     'IOS',
//     'Spring Boot',
//     'DB',
//     'AWS',
//   ]);

//   const allInterests = [
//     '웹 프론트엔드',
//     '웹 백엔드',
//     '모바일 프로그래밍',
//     'Android',
//     'IOS',
//     '게임 개발',
//     '데이터 분석',
//     'AI / 머신러닝',
//     '임베디드 / IOT',
//     '블록체인',
//     '알고리즘 / 자료구조',
//     '네트워크 / 보안',
//     '시스템 프로그래밍',
//     '풀스택',
//     '운영체제 / 컴파일러',
//     'DB',
//     '스타트업 창업 / 취업',
//     '연구 / 대학원',
//     '해커톤 / 공모전',
//     '오픈소스 기여',
//     'UX/UI',
//   ];

//   const [selectedInterests, setSelectedInterests] = useState([
//     '모바일 프로그래밍',
//     'Android',
//     '웹 프론트엔드',
//     '풀스택',
//   ]);

//   const toggleStack = (stack) => {
//     if (selectedStacks.includes(stack)) {
//       setSelectedStacks(selectedStacks.filter((item) => item !== stack));
//     } else {
//       setSelectedStacks([...selectedStacks, stack]);
//     }
//   };

//   const toggleInterest = (interest) => {
//     if (selectedInterests.includes(interest)) {
//       setSelectedInterests(
//         selectedInterests.filter((item) => item !== interest)
//       );
//     } else {
//       setSelectedInterests([...selectedInterests, interest]);
//     }
//   };

//   return (
//     <div className='p-0 space-y-4 max-w-6xl mx-auto'>
//       <div className='block md:hidden'>
//         {/* 상단 헤더 */}
//         <div className='flex justify-between items-center mb-2 bg-white h-10'>
//           <img src={back} alt='뒤로가기' className='w-5 h-5 ml-5' />
//           <img src={vertical_ellipsis} alt='더보기' className='w-6 h-6 mr-5' />
//         </div>

//         {/* 프로필 영역 */}
//         <div className='flex justify-between items-center bg-white p-4 rounded-xl shadow m-4'>
//           <div className='flex items-center'>
//             <div className='relative w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold'>
//               <img
//                 src={profil}
//                 alt='프로필'
//                 className='w-full h-full object-cover'
//               />
//               <img
//                 src={whiteEditIcon}
//                 alt='프로필 편집'
//                 onClick={() => setIsModalOpen(true)}
//                 className='absolute bottom-0 right-0 w-4 h-4 rounded-full cursor-pointer'
//                 style={{backgroundColor: '#5C5AEE'}}
//               />
//             </div>
//             <div className='ml-4'>
//               <div className='font-semibold text-lg'>윤정빈</div>
//               <div className='flex text-sm gap-3'>
//                 <span>컴퓨터과학전공</span>
//                 <span>23학번</span>
//               </div>
//               <div className='flex mt-1 text-xs space-x-2'>
//                 <span className='pr-13' style={{color: '#A3A3A4'}}>
//                   Github <br />
//                   <span className='font-medium text-black'>Dotori</span>
//                 </span>
//                 <span style={{color: '#A3A3A4'}}>
//                   BOJ <br />
//                   <span className='font-medium text-black'>dotori0345</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 모바일용 자기소개 */}
//         <div className='bg-white p-4 rounded-xl shadow m-4 h-50'>
//           <div className='flex justify-between items-center mb-2'>
//             <span className='font-semibold'>자기소개</span>
//             <img src={editIcon} alt='편집' className='w-6 h-6' />
//           </div>
//           <p className='text-gray-700 text-sm'>안녕하세요 저는 리라쿠마예요.</p>
//         </div>

//         {/* 모바일용 기술 스택 */}
//         <div className='bg-white p-4 rounded-xl shadow m-4'>
//           <div className='flex justify-between items-center mb-2'>
//             <span className='font-semibold'>기술 스택</span>
//             <img
//               src={editIcon}
//               alt='편집'
//               className='w-6 h-6 cursor-pointer'
//               onClick={() => setIsStackModalOpen(true)}
//             />
//           </div>
//           <div className='flex flex-wrap gap-2'>
//             {selectedStacks.map((item) => (
//               <span
//                 key={item}
//                 className='px-3 py-1 rounded-md text-xs'
//                 style={{backgroundColor: '#E5E5FC'}}>
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* 모바일용 관심 분야 */}
//         <div className='bg-white p-4 rounded-xl shadow m-4'>
//           <div className='flex justify-between items-center mb-2'>
//             <span className='font-semibold'>관심 분야</span>
//             <img
//               src={editIcon}
//               alt='편집'
//               className='w-6 h-6 cursor-pointer'
//               onClick={() => setIsInterestModalOpen(true)}
//             />
//           </div>
//           <div className='flex flex-wrap gap-2'>
//             {selectedInterests.map((item) => (
//               <span
//                 key={item}
//                 className='px-3 py-1 rounded-md text-xs'
//                 style={{backgroundColor: '#E5E5FC'}}>
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* PC 버전 */}
//       <div className='hidden md:flex gap-6 mr-40 ml-40'>
//         {/* 왼쪽 프로필 카드 */}
//         <div className='bg-white p-6 rounded-3xl shadow w-full md:w-1/3 flex flex-col items-center mt-15'>
//           <img src={messageIcon} alt='메시지' className='w-8 h-8 mt-0 ml-50' />
//           <div className='relative w-24 h-24 rounded-full flex items-center justify-center text-white text-xl font-bold'>
//             <img
//               src={profil}
//               alt='프로필'
//               className='w-full h-full object-cover'
//             />
//           </div>
//           <div className='mt-4 text-center'>
//             <div className='font-semibold text-lg'>윤정빈</div>
//             <div className='text-sm mt-1'>23학번</div>
//             <div className='text-sm mt-1'>컴퓨터과학전공</div>
//             <div className='flex justify-center gap-10 mt-3 text-xs'>
//               <span style={{color: '#A3A3A4'}}>
//                 Github <br />
//                 <span className='font-medium text-black'>Dotori</span>
//               </span>
//               <span style={{color: '#A3A3A4'}}>
//                 BOJ <br />
//                 <span className='font-medium text-black'>dotori0345</span>
//               </span>
//             </div>
//           </div>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className='mt-4 px-20 py-2 text-white text-sm rounded-lg transition'
//             style={{backgroundColor: '#5C5AEE'}}>
//             프로필 수정
//           </button>
//         </div>

//         {/* 오른쪽 콘텐츠 */}
//         <div className='flex-1 space-y-4 mt-15'>
//           {/* 자기소개 */}
//           <div className='bg-white p-4 rounded-3xl shadow h-40'>
//             <div className='flex justify-between items-center mb-2'>
//               <span className='font-semibold'>자기소개</span>
//               <img src={editIcon} alt='편집' className='w-6 h-6' />
//             </div>
//             <p className='text-gray-700 text-sm'>
//               안녕하세요 저는 리라쿠마예요.
//             </p>
//           </div>

//           {/* 기술 스택 */}
//           <div className='bg-white p-4 rounded-3xl shadow'>
//             <div className='flex justify-between items-center mb-2'>
//               <span className='font-semibold'>기술 스택</span>
//               <img
//                 src={editIcon}
//                 alt='편집'
//                 className='w-6 h-6 cursor-pointer'
//                 onClick={() => setIsStackModalOpen(true)}
//               />
//             </div>
//             <div className='flex flex-wrap gap-2'>
//               {selectedStacks.map((item) => (
//                 <span
//                   key={item}
//                   className='px-3 py-1 rounded-md text-xs'
//                   style={{backgroundColor: '#E5E5FC'}}>
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* 관심 분야 */}
//           <div className='bg-white p-4 rounded-3xl shadow'>
//             <div className='flex justify-between items-center mb-2'>
//               <span className='font-semibold'>관심 분야</span>
//               <img
//                 src={editIcon}
//                 alt='편집'
//                 className='w-6 h-6 cursor-pointer'
//                 onClick={() => setIsInterestModalOpen(true)}
//               />
//             </div>
//             <div className='flex flex-wrap gap-2'>
//               {selectedInterests.map((item) => (
//                 <span
//                   key={item}
//                   className='px-3 py-1 rounded-md text-xs'
//                   style={{backgroundColor: '#E5E5FC'}}>
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 기술 스택 선택 모달 */}
//       {isStackModalOpen && (
//         <div
//           className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'
//           onClick={() => setIsStackModalOpen(false)}>
//           <div
//             className='bg-white p-6 rounded-xl w-96 max-h-[80vh] overflow-y-auto'
//             onClick={(e) => e.stopPropagation()}>
//             <div className='flex justify-between items-center mb-4'>
//               <h2 className='text-lg font-semibold'>기술 스택</h2>
//               <img
//                 src={editIcon}
//                 alt='닫기'
//                 className='w-6 h-6 cursor-pointer'
//                 onClick={() => setIsStackModalOpen(false)}
//               />
//             </div>
//             <div className='flex flex-wrap gap-2'>
//               {allStacks.map((stack) => {
//                 const isSelected = selectedStacks.includes(stack);
//                 return (
//                   <span
//                     key={stack}
//                     onClick={() => toggleStack(stack)}
//                     className='px-3 py-1 rounded-md text-xs cursor-pointer'
//                     style={{
//                       backgroundColor: isSelected ? '#E5E5FC' : '#E5E5E5',
//                     }}>
//                     {stack}
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 관심 분야 선택 모달 */}
//       {isInterestModalOpen && (
//         <div
//           className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'
//           onClick={() => setIsInterestModalOpen(false)}>
//           <div
//             className='bg-white p-6 rounded-xl w-96 max-h-[80vh] overflow-y-auto'
//             onClick={(e) => e.stopPropagation()}>
//             <div className='flex justify-between items-center mb-4'>
//               <h2 className='text-lg font-semibold'>관심 분야</h2>
//               <img
//                 src={editIcon}
//                 alt='닫기'
//                 className='w-6 h-6 cursor-pointer'
//                 onClick={() => setIsInterestModalOpen(false)}
//               />
//             </div>
//             <div className='flex flex-wrap gap-2'>
//               {allInterests.map((interest) => {
//                 const isSelected = selectedInterests.includes(interest);
//                 return (
//                   <span
//                     key={interest}
//                     onClick={() => toggleInterest(interest)}
//                     className='px-3 py-1 rounded-md text-xs cursor-pointer'
//                     style={{
//                       backgroundColor: isSelected ? '#E5E5FC' : '#E5E5E5',
//                     }}>
//                     {interest}
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 프로필 수정 모달 */}
//       {isModalOpen && (
//         <div className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'>
//           <div className='bg-white p-6 rounded-xl w-80 space-y-4'>
//             <div className='flex flex-col items-center'>
//               <div className='relative w-24 h-24 rounded-full'>
//                 <img
//                   src={profil}
//                   alt='프로필'
//                   className='w-full h-full object-cover'
//                 />
//                 <img
//                   src={whiteEditIcon}
//                   alt='프로필 편집'
//                   className='absolute bottom-0 right-2 w-5 h-5 rounded-full'
//                   style={{backgroundColor: '#5C5AEE'}}
//                 />
//               </div>
//             </div>
//             <div>
//               <label className='block text-sm font-medium mb-1'>
//                 Github ID
//               </label>
//               <input
//                 type='text'
//                 defaultValue='Dotori'
//                 className='w-full p-2 rounded bg-gray-100'
//               />
//             </div>
//             <div>
//               <label className='block text-sm font-medium mb-1'>BOJ 핸들</label>
//               <input
//                 type='text'
//                 defaultValue='dotori0345'
//                 className='w-full p-2 rounded bg-gray-100'
//               />
//             </div>
//             <div className='flex justify-between mt-4'>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className='w-1/2 p-2 bg-gray-200 rounded mr-2'>
//                 취소
//               </button>
//               <button
//                 onClick={() => {
//                   setIsModalOpen(false);
//                 }}
//                 className='w-1/2 p-2 bg-indigo-500 text-white rounded ml-2'>
//                 저장
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Resume;

///////////////////////////////////////////////////////////

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
