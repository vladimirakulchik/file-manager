import { copyFileSync, constants } from 'fs';

export const copyFile = (source, destination) => {
    try {
        copyFileSync(source, destination, constants.COPYFILE_EXCL);
    } catch (error) {
        throw new Error('Failed to copy file');
    }
};
