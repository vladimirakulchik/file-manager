import { unlinkSync } from 'fs';

export const deleteFile = (filePath) => {
    try {
        unlinkSync(filePath);
    } catch (error) {
        throw new Error('Failed to delete file');
    }
};
