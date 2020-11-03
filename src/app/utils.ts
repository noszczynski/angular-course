import { cloneDeep } from 'lodash';

const clone = (item): any => {
    if (item) {
        if (Array.isArray(item)) {
            return cloneDeep([...item]);
        } else if (typeof item === 'object') {
            return Object.assign({}, { ...item });
        } else {
            return false;
        }
    }

    return false;
};

export { clone };
