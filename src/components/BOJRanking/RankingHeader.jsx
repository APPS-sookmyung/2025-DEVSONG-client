import back from '../../assets/icons/back.svg';
import useGoBack from '@hooks/useGoBack';

export default function BaekjoonRankingHeader() {
  const goBack = useGoBack('/home');

  return (
    <button
      onClick={goBack}
      className='cursor-pointer relative w-full sm:w-auto flex items-center gap-4 p-3 mb-3 sm:p-0 sm:mb-5 bg-white sm:bg-transparent'>
      <img
        className='self-start rounded-xl pl-3 sm:pl-0'
        src={back}
        alt='back'
      />
      <span className='font-bold mx-auto sm:mx-10 sm:static absolute left-1/2 -translate-x-1/2'>
        백준 랭킹
      </span>
    </button>
  );
}
