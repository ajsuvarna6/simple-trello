import React from 'react';
import reduxConnect from '../../store/reduxConnect';
import { IList, IInitialState, ICard } from '../../reducers';
import Button from '../shared/Button';
import AddCard from '../Card/AddCard';
import styled from 'styled-components';

interface IListProps extends IList {
    cards: Array<ICard>
}

const ListContainer = styled.div`
    background-color: #ebecf0;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
    max-width: 272px;
    min-width: 272px;
    height: 100%;
    white-space: nowrap;
    margin-right: 10px;
    padding: 10px;
`;

const ListTitle = styled.div`
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
    word-break: break-all;
    white-space: normal;
    cursor: move;
`;

const ListItem = styled.div`
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    cursor: pointer;
    padding: 10px;
    margin-bottom: 10px;

    &:hover, &:active {
        background-color: #f4f5f7;
    }
`;

const List: React.FC<IListProps> = ({ listId, title, cards }) => {
    return (
        <ListContainer>
            <ListTitle>
                {title}
            </ListTitle>
            {
                cards.map((card) => (
                    <ListItem key={card.cardId}>{card.title}</ListItem>
                ))
            }
            <AddCard listId={listId} />
        </ListContainer>
    );
};

function mapStateToProps(state: IInitialState, { listId }: any) {
    return {
        cards: state.cards[listId] || []
    };
}

export default reduxConnect(List, null, mapStateToProps);