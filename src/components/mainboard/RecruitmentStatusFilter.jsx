import {useState} from 'react';
import ellipse from '../../assets/icons/ellipseIcon.svg';

const status = [
  {id: 'ALL', title: '전체'},
  {id: 'OPEN', title: '모집중'},
  {id: 'CLOSED', title: '모집완료'},
];
const RecruitmentStatusFilter = () => {
  const [isClicked, setIsClicked] = useState('ALL');
  const clickedStyle = 'text-black-100 font-medium';

  return (
    <div>
      <ul className='cursor-pointer flex text-xs gap-5 md:text-base lg:text-lg md:gap-9 text-black-80'>
        {status.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                item.id === isClicked ? clickedStyle : ''
              } flex-center gap-1.5 py-2`}
              onClick={() => setIsClicked(item.id)}>
              <img src={ellipse} alt='' />
              <li>{item.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RecruitmentStatusFilter;
