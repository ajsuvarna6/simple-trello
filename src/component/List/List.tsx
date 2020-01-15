import React from 'react';
import reduxConnect from '../../store/reduxConnect';
import { IList, IInitialState, ICard } from '../../reducers';
import Button from '../shared/Button';

interface IListProps extends IList {
    cards: Array<ICard>
}

const List: React.FC<IListProps> = ({ listId, title, cards }) => {
    return (
        <div>
            <div>
                {title}
            </div>
            {
                cards.map((card) => (
                    <div key={card.cardId}>{card.title}</div>
                ))
            }
            <Button>Add Card</Button>
        </div>
    );
};

function mapStateToProps(state: IInitialState, { listId }: any) {
    return {
        cards: state.cards[listId] || []
    };
}

export default reduxConnect(List, null, mapStateToProps);