import { CHANGE_CURRENT_PATH } from '../constants/ActionTypes';

export default function currentPath(state = '/', action) {
    switch (action.type) {
        case CHANGE_CURRENT_PATH:
            return action.path;
        default:
            return state;
    }
}