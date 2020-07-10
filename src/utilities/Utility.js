export const Truncate = (value, length) => {
  if (value.length > length)
    return value.substring(0, length) + '...';
  else
    return value;
}