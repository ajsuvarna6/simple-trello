import { IUserDetail } from './../reducers/index';
import uuidv1 from 'uuid/v1';
import { ADD_LIST_TO_BOARD, FETCH_USER_DETAILS, API_IN_PROGRESS } from './actionConstants';


export function apiInProgress(payload: boolean) {
    return {
        type: API_IN_PROGRESS,
        payload
    }
}

export function fetchUserDetails(payload: IUserDetail) {
    return {
        type: FETCH_USER_DETAILS,
        payload
    }
}

export function addListToBoard(boardId: string, title: string) {
    const listId = uuidv1();
    return {
        type: ADD_LIST_TO_BOARD,
        payload: {
            listId,
            title, 
            boardId
        }
    }
}