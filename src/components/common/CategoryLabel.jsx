import React from 'react';

const categoryStyle = {
  프로젝트: 'bg-[#E5FFDF] text-[#7DBD6E]',
  스터디: 'bg-[#FBFFDF] text-[#999D80]',
  대외활동: 'bg-[#FFE6DF] text-[#9D8882]',
  정보: 'bg-[#FFF2DF] text-[#9A8E7D]',
  자유: 'bg-[#F1F0EF] text-[#A09E9C]',
};
const CategoryLabel = ({category}) => {
  return (
    <div>
      <span className={`label-style ${categoryStyle[category]}`}>
        {category}
      </span>
    </div>
  );
};

export default CategoryLabel;
