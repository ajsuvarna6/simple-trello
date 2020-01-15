import React from 'react';
import reduxConnect from '../../store/reduxConnect';
import List from '../List';
import { IList } from '../../reducers';
import styled from 'styled-components';
import AddList from '../List/AddList';

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const BoardHeader = styled.div`
    display: flex;
    padding: 10px 20px;
    background-color: #0266a2;
    color: #fff;
    ${({theme}) => theme.headerFontFamily}
`;

const BoardListContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 10px 0;
    overflow-x: auto;
    overflow-y: hidden;
    margin-right: 20px;
    margin-left: 20px;
`;

const Board: React.FC = ({ boardDetail, boardLists }: any) => {

    return (
        <BoardContainer>
            <BoardHeader>{boardDetail.boardName}</BoardHeader>
            <BoardListContainer>
                {boardLists.map((boardList: IList) => <List key={boardList.listId} {...boardList} />)}
                <AddList boardId={boardDetail.boardId} />
            </BoardListContainer>
        </BoardContainer>
    );
};

function mapStateToProps(state: any) {
    const boardDetail = state.boards[0]
    return {
        boardDetail,
        boardLists: state.lists[boardDetail.boardId] || []
    };
}

export default reduxConnect(Board, null, mapStateToProps);