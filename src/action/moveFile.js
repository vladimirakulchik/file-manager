import { copyFileSync, constants, unlinkSync } from 'fs';

export const moveFile = (source, destination) => {
    try {
        copyFileSync(source, destination, constants.COPYFILE_EXCL);
        unlinkSync(source);
    } catch (error) {
        throw new Error('Failed to move file');
    }
};
