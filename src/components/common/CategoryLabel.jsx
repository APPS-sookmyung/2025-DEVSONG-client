const category_style = {
  project: 'bg-[#E5FFDF] text-[#7DBD6E]',
  study: 'bg-[#FBFFDF] text-[#999D80]',
  extra: 'bg-[#FFE6DF] text-[#9D8882]',
  info: 'bg-[#FFF2DF] text-[#9A8E7D]',
  free: 'bg-[#F1F0EF] text-[#A09E9C]',
};

const category_title = {
  project: '프로젝트',
  study: '스터디',
  extra: '대외 활동',
  info: '정보',
  free: '자유',
};
const CategoryLabel = ({category}) => {
  return (
    <div>
      <span className={`label-style ${category_style[category]}`}>
        {category_title[category]}
      </span>
    </div>
  );
};

export default CategoryLabel;
