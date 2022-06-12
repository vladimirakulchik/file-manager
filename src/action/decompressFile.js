import { readFileSync, writeFileSync } from 'fs';
import { brotliDecompressSync } from 'zlib';

export const decompressFile = (source, destination) => {
    try {
        const content = readFileSync(source);
        const data = brotliDecompressSync(content);
        writeFileSync(destination, data, { flag: 'wx' });
    } catch (error) {
        throw new Error('Failed to decompress file');
    }
};
