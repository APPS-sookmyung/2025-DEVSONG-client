import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ModalLayout from '../common/ModalLayout';
import {getApplicants} from '@apis/posts';

const Applicants = ({postId}) => {
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await getApplicants(postId);
        setApplicants(response.data);
      } catch (error) {
        console.error('지원자 목록 불러오기 실패', error);
      }
    };

    fetchApplicants();
  }, [postId]);

  return (
    <ModalLayout width={'w-36.5 md:w-50'}>
      {applicants?.map(({userId, username, major, studentId}, index) => (
        <div
          key={index}
          onClick={() => navigate(`/resume/${postId}/${userId}`)}
          className='cursor-pointer'>
          <h3 className='text-sm md:text-lg font-semibold leading-[22.4px] md:leading-6'>
            {username}
          </h3>
          <p className='text-[10px] md:text-sm font-medium text-black-60 md:leading-6'>
            {`${major}전공 ${studentId}학번`}
          </p>
        </div>
      ))}
    </ModalLayout>
  );
};

export default Applicants;
