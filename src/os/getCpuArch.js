import { arch } from 'os';

export const getCpuArch = () => {
    return arch();
};
