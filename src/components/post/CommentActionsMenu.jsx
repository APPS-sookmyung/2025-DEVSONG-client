import ModalLayout from '../common/ModalLayout';

const menuItems = ['수정', '삭제', '신고'];

const CommentActionsMenu = () => {
  return (
    <ModalLayout width={'w-16 md:w-24'}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className='text-sm md:text-base font-semibold leading-[26.5px] text-black-100'>
          {item}
        </div>
      ))}
    </ModalLayout>
  );
};

export default CommentActionsMenu;
