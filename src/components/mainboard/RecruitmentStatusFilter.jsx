import React from 'react';
import ellipse from '../../assets/icons/ellipseIcon.svg';

const status = [
  {id: 'ALL', title: '전체'},
  {id: 'OPEN', title: '모집중'},
  {id: 'CLOSED', title: '모집완료'},
];
const RecruitmentStatusFilter = () => {
  return (
    <div>
      <ul className='cursor-pointer flex text-sm gap-5 md:text-base lg:text-lg md:gap-9 text-black-80'>
        {status.map((item) => {
          return (
            <div key={item.id} className='flex-center gap-1.5'>
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
