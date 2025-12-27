export const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  const currentDate = new Date();
  const updated =
    currentDate.toDateString() === date.toDateString()
      ? date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
      : date
          .toLocaleDateString('ko-KR', {
            month: '2-digit',
            day: '2-digit',
          })
          .replaceAll('.', '')
          .replace(' ', '/');

  return updated;
};
