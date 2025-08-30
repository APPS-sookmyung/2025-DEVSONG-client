import React from 'react';

const recruitStyle = {
  모집완료: 'bg-grey-02 text-black-60',
  모집중: 'bg-main-60 text-white',
};

const RecruitLabel = ({closed}) => {
  const status = closed ? '모집완료' : '모집중';
  return (
    <div>
      <span className={`label-style ${recruitStyle[status]}`}>{status}</span>
    </div>
  );
};

export default RecruitLabel;
