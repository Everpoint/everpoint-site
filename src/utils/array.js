export const rowColumns = (array, columns) => {
  const newArray = array.slice();

  const col = [];

  for (let i = 0; i < columns; i++) {
    col.push([]);
  }

  return newArray.reduce((p, c, i) => {
    p[i % columns].push(c);
    return p;
  }, col);
};
