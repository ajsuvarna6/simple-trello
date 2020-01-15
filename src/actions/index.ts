import { IUserDetail } from './../reducers/index';
import uuidv1 from 'uuid/v1';
import { ADD_LIST_TO_BOARD, FETCH_USER_DETAILS, API_IN_PROGRESS, ADD_CARD_TO_LIST, SWITCH_LIST } from './actionConstants';


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


export function addCardToList(listId: string, title: string, description: string) {
    const cardId = uuidv1();
    return {
        type: ADD_CARD_TO_LIST,
        payload: {
            listId,
            title, 
            cardId,
            description
        }
    }
}

export function switchListItems(boardId: string, sourceId: string, destId: string) {
    return ({
        type: SWITCH_LIST,
        payload: {
            boardId,
            sourceId,
            destId
        }
    });
}
