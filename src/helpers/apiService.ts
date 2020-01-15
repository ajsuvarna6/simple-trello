import uuidv1 from 'uuid/v1';
import { IUserDetail } from '../reducers';

const boardId = uuidv1();
const listId = uuidv1();
const cardId = uuidv1();
const userDetails: IUserDetail = {
    boards: [
        {
            boardId,
            boardName: 'My Tasks',
        }
    ],
    lists: {
        [boardId]: [
            {
                listId,
                title: 'Backlog'
            }
        ]
    },
    cards: {
        [listId]: [
            {
                cardId,
                title: 'Task 1',
                description: 'Do Something'
            }
        ]
    }
}

const APIUrls = {
    'getUserDetails': '/get-user-board'
}


export function apiService(url: string, method = 'GET', headers?: any, body?: any) {
    return fetch(url, { method, headers, body: JSON.stringify(body) })
        .then(
            (response: Response) => response.json(),
            (error: any) => ({ type: 'error', message: 'Something went wrong!' })
        );
}

// #region Mock Area
/**
 * temporary mock API
 */
const mockApis: any = {
    [APIUrls.getUserDetails]: userDetails
};

function mockApiService(url: string, method?: string, headers?: any, body?: any) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, 1000, mockApis[url]);
    });
}

// #endregion

export function getUserDetails(): Promise<any> {
    return mockApiService(APIUrls.getUserDetails);
}
