import React from 'react';

const category_map = {
  project: {style: 'bg-[#E5FFDF] text-[#7DBD6E]', label: '프로젝트'},
  study: {style: 'bg-[#FBFFDF] text-[#999D80]', label: '스터디'},
  extra: {style: 'bg-[#FFE6DF] text-[#9D8882]', label: '대외 활동'},
  info: {style: 'bg-[#FFF2DF] text-[#9A8E7D]', label: '정보'},
  free: {style: 'bg-[#F1F0EF] text-[#A09E9C]', label: '자유'},
};
const CategoryLabel = ({category}) => {
  return (
    <div>
      {category && (
        <span className={`label-style ${category_map[category].style}`}>
          {category_map[category].label}
        </span>
      )}
    </div>
  );
};

export default CategoryLabel;
