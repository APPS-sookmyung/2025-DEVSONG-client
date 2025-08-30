import ModalLayout from '../common/ModalLayout';

const applicants = [
  {
    name: '박송이',
    major: '데이터사이언스전공',
    year: 24,
  },
  {
    name: '이송이',
    major: '컴퓨터과학전공',
    year: 23,
  },
  {
    name: '김송이',
    major: '데이터사이언스전공',
    year: 22,
  },
  {
    name: '눈송이',
    major: '데이터사이언스전공',
    year: 23,
  },
  {
    name: '최송이',
    major: '데이터사이언스전공',
    year: 25,
  },
];

const Applicants = () => {
  return (
    <ModalLayout width={'w-36.5'}>
      {applicants.map(({name, major, year}, index) => (
        <div key={index}>
          <h3 className='text-sm font-semibold leading-[22.4px]'>{name}</h3>
          <p className='text-[10px] font-medium text-black-60'>{`${major}전공 ${year}학번`}</p>
        </div>
      ))}
    </ModalLayout>
  );
};

export default Applicants;
