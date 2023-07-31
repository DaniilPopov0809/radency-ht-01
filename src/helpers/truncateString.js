export const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }
  const lastSpaceIndex = str.lastIndexOf(' ', maxLength);
  if (lastSpaceIndex <= 0) {
    return str.slice(0, maxLength - 1) + '...';
  }
  let truncatedStr = str.slice(0, lastSpaceIndex);
  const lastChar = truncatedStr[truncatedStr.length - 1];
  if (!lastChar.match(/[A-Za-z0-9]/)) {
    truncatedStr = truncatedStr.slice(0, -1);
  }
  return truncatedStr + '...';
};