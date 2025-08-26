import ModalLayout from '../common/ModalLayout';

const CommentActionsMenu = () => {
  return (
    <ModalLayout width={'w-16 md:w-24'}>
      <div className='text-sm md:text-base font-semibold leading-[26.5px] text-black-100'>
        {'삭제'}
      </div>
    </ModalLayout>
  );
};

export default CommentActionsMenu;
