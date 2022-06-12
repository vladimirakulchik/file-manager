import { userInfo } from 'os';

export const getUserName = () => {
    return userInfo().username;
};
