import { CHANGE_CURRENT_PATH } from '../constants/ActionTypes';

export function setCurrentPath(path) {
    return { 
        type: CHANGE_CURRENT_PATH,
        path
    };
}
