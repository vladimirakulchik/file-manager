import { cpus } from 'os';

export const getCpus = () => {
    const cpuInfo = cpus().map((cpu) => {
        const speed = cpu.speed / 1000;

        return {
            'model': cpu.model,
            'speed': +speed.toFixed(2),
        };
    });

    return {
        'amount': cpuInfo.length,
        'info': cpuInfo,
    };
};
