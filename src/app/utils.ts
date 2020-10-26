import { cloneDeep } from 'lodash';

const clone = (arr) => {
  return cloneDeep([...arr]);
};

export {
  clone
};
