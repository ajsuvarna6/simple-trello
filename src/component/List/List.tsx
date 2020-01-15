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
    width: 272px;
    height: 100%;
    white-space: nowrap;
    margin-right: 10px;
    padding: 10px;
`;

const List: React.FC<IListProps> = ({ listId, title, cards }) => {
    return (
        <ListContainer>
            <div>
                {title}
            </div>
            {
                cards.map((card) => (
                    <div key={card.cardId}>{card.title}</div>
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