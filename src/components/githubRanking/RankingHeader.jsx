// import React from 'react';
// import back from '../../assets/icons/back.svg';

// export default function RankingHeader() {
//   return (
//     <div className='flex gap-4 mb-5'>
//       <img className='self-start rounded-[4px]' src={back} alt='back' />
//       <span className='font-bold'>Github 랭킹</span>
//     </div>
//   );
// }

import React from 'react';
import back from '../../assets/icons/back.svg';

// export default function RankingHeader() {
//   return (
//     <div className='flex gap-4 p-3 mb-3 mr100 sm:p-0 sm:mb-5 bg-white sm:bg-transparent'>
//       <img className='self-start rounded-xl' src={back} alt='back' />
//       <span className='font-bold'>Github 랭킹</span>
//     </div>
//   );
// }

// export default function RankingHeader() {
//   return (
//     <div className='w-full sm:w-auto flex items-center gap-4 p-3 mb-3 sm:p-0 sm:mb-5 bg-white sm:bg-transparent'>
//       <img
//         className='self-start rounded-xl pl-3 sm:pl-0'
//         src={back}
//         alt='back'
//       />
//       <span className='font-bold items-center'>Github 랭킹</span>
//     </div>
//   );
// }

export default function RankingHeader() {
  return (
    <div className='relative w-full sm:w-auto flex items-center gap-4 p-3 mb-3 sm:p-0 sm:mb-5 bg-white sm:bg-transparent'>
      <img
        className='self-start rounded-xl pl-3 sm:pl-0'
        src={back}
        alt='back'
      />
      <span className='font-bold mx-auto sm:mx-10 sm:static absolute left-1/2 -translate-x-1/2'>
        Github 랭킹
      </span>
    </div>
  );
}
