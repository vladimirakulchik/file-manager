import { cpus } from 'os';

export const getCpus = () => {
    return cpus().map((cpu) => {
        const speed = cpu.speed / 1000;

        return {
            'model': cpu.model,
            'speed': +speed.toFixed(2),
        };
    });
};
