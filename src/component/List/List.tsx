import React from 'react';
import reduxConnect from '../../store/reduxConnect';
import { IList, IInitialState, ICard } from '../../reducers';
import AddCard from '../Card/AddCard';
import styled from 'styled-components';
import Card from '../Card';
import { useDrag, useDrop } from 'react-dnd'
import { switchListItems } from '../../actions';

interface IListProps extends IList {
    cards: Array<ICard>,
    boardId: string,
    switchListItems: Function
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

const List: React.FC<IListProps> = ({ boardId, listId, title, cards, switchListItems }) => {
    const [, drag, preview] = useDrag({
        item: { listId, type: 'LIST' },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.6 : 1,
        }),
        end: (item: any, monitor) => {
            const dropResult = monitor.getDropResult()
            console.log(item, dropResult);
            if (item && dropResult && dropResult.listId !== item.listId) {
                switchListItems(boardId, item.listId, dropResult.listId);
            }
        }
    });


    const [, drop] = useDrop({
        accept: 'LIST',
        drop: () => ({ listId, title })
    });


    return (
        <ListContainer ref={node => preview(drop(node))}>
            <ListTitle ref={drag}>
                {title}
            </ListTitle>
            {
                cards.map((card) => (
                    <Card key={card.cardId} listId={listId} {...card} />
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

export default reduxConnect(List, { switchListItems }, mapStateToProps);