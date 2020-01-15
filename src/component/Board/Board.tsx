import React from 'react';
import reduxConnect from '../../store/reduxConnect';
import Button from '../shared/Button';
import List from '../List';
import { addListToBoard } from '../../actions';
import { IList } from '../../reducers';

const Board: React.FC = ({ boardDetail, boardLists, addListToBoard }: any) => {
    const onClickAddList = () => {
        addListToBoard(boardDetail.boardId, 'Ubuntu');
    };
    return (
        <div>
            <div>{boardDetail.boardName}</div>
            <div>
                {boardLists.map((boardList: IList) => <List key={boardList.listId} {...boardList} />)}
                <Button onClick={onClickAddList}>Add List</Button>
            </div>
        </div>
    );
};

function mapStateToProps(state: any) {
    const boardDetail = state.boards[0]
    return {
        boardDetail,
        boardLists: state.lists[boardDetail.boardId] || []
    };
}

export default reduxConnect(Board, { addListToBoard }, mapStateToProps);