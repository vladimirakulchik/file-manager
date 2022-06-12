import { accessSync, constants } from 'fs';

export const isFileExist = (filePath) => {
    try {
        accessSync(filePath, constants.F_OK);
        return true;
    } catch (error) {
        return false;
    }
};
