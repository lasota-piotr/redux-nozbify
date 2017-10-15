const omit = (obj, paths) => {
  const stringify = arr => arr.map(String);
  return Object.keys(obj)
    .filter(el => !stringify(paths).includes(el))
    .reduce((acc, el) => ({
      ...acc,
      [el]: obj[el],
    }), {});
};

export default omit;
