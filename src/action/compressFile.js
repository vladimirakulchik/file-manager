import { readFileSync, writeFileSync } from 'fs';
import { brotliCompressSync } from 'zlib';

export const compressFile = (source, destination) => {
    try {
        const content = readFileSync(source);
        const data = brotliCompressSync(content);
        writeFileSync(destination, data, { flag: 'wx' });
    } catch (error) {
        throw new Error('Failed to compress file');
    }
};
