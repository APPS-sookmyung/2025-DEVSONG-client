import {useEffect, useState} from 'react';
import ModalLayout from '../common/ModalLayout';
import {getApplicants} from '@apis/posts';

const Applicants = ({postId}) => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await getApplicants(postId); // API 호출
        setApplicants(response.data);
      } catch (error) {
        console.error('지원자 목록 불러오기 실패', error);
      }
    };

    fetchApplicants();
  }, [postId]);

  return (
    <ModalLayout width={'w-36.5'}>
      {applicants?.map(({username, major, studentId}, index) => (
        <div key={index}>
          <h3 className='text-sm font-semibold leading-[22.4px]'>{username}</h3>
          <p className='text-[10px] font-medium text-black-60'>{`${major}전공 ${studentId}학번`}</p>
        </div>
      ))}
    </ModalLayout>
  );
};

export default Applicants;
