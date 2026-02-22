import Button from '@components/common/Button';

const ApplyModal = ({onApplyClick}) => {
  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex-center'>
      <article className='flex flex-col items-center px-5 py-3 gap-4 bg-white shadow-box rounded-xl'>
        <p className='font-semibold text-xl leading-8 text-black-100'>
          프로젝트에 지원할까요?
        </p>
        <div className='flex gap-3'>
          <Button variant='tertiary' className='w-16'>
            취소
          </Button>
          <Button onClick={onApplyClick} className='w-16' variant='primary'>
            확인
          </Button>
        </div>
      </article>
    </div>
  );
};

export default ApplyModal;
