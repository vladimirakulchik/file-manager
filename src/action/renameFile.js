import { renameSync } from 'fs';
import { isFileExist } from './isFileExist.js';

export const renameFile = (oldPath, newPath) => {
    if (isFileExist(newPath)) {
        throw new Error('newPath already exists')
    }

    try {
        renameSync(oldPath, newPath);
    } catch (error) {
        throw new Error('Failed to rename file');
    }
};
