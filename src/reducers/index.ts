import { FETCH_USER_DETAILS, API_IN_PROGRESS } from './../actions/actionConstants';
import { ADD_LIST_TO_BOARD } from "../actions/actionConstants";

export interface IBoard {
    boardId: string,
    boardName: string
};

export interface IList {
    listId: string,
    title: string
};

export interface ICard {
    cardId: string,
    title: string,
    description?: string
};

export interface ILists {
    [boardId: string]: Array<IList>
};

export interface ICards {
    [listId: string]: Array<ICard>
}


export interface IUserDetail {
    boards: Array<IBoard>,
    lists: ILists,
    cards: ICards
};

export interface IInitialState extends IUserDetail {
    apiInProgress: boolean,
    activeBoardId: string
};

export const initialState: IInitialState = {
    boards: [],
    lists: {},
    cards: {},
    apiInProgress: false,
    activeBoardId: ''
};

export default function reducer(state: IInitialState = initialState, { type, payload }: {type: string, payload: any}) {
    switch (type) {
        case API_IN_PROGRESS: {
            return {
                ...state,
                apiInProgress: payload
            }
        }

        case FETCH_USER_DETAILS: {
            return {
                ...state,
                ...payload,
                activeBoardId: payload.boards[0].boardId
            };
        }

        case ADD_LIST_TO_BOARD: {
            const { boardId, ...list } = payload;
            const boardLists = [...state.lists[payload.boardId] || [], list];
            
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [payload.boardId]: boardLists
                }
            };
        }

        default:
            return state;
    }
};
