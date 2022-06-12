import { readFileSync } from 'fs';

const { createHash } = await import('crypto');

export const getFileHash = (filePath) => {
    const content = readFileSync(filePath, 'utf-8');
    const hash = createHash('sha256').update(content);
    const hexValue = hash.digest('hex');

    return hexValue;
};
