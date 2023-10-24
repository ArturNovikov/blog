const truncateText = (text, maxLength = 50) => {
  if (typeof text !== 'string' || !text) return '';

  const repetitivePattern = /(.)\1{9,}/;
  const match = text.match(repetitivePattern);
  if (match) {
    const index = match.index;
    text = text.slice(0, index + 10) + (text.length > index + 10 ? '...' : '');
    return text;
  }

  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export default truncateText;
