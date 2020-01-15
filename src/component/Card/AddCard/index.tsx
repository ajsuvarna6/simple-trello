import React, { Fragment, useState } from 'react';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import { addCardToList } from '../../../actions';
import styled from 'styled-components';
import reduxConnect from '../../../store/reduxConnect';

const AddCardContainer = styled.div`

`;

const useCustomState = (defaultValue: any) => {
    const [value, setValue] = useState(defaultValue);
    return {
        value,
        setValue
    };
};

export function AddCard({ listId, addCardToList }: any) {
    const showAddList = useCustomState(false);
    const cardTitle = useCustomState('');
    const cardDescription = useCustomState('');

    const onClickAddList = (displayAddList = false) => {
        showAddList.setValue(displayAddList);
        if (!displayAddList) {
            addCardToList(listId, cardTitle.value, cardDescription.value);
            cardTitle.setValue('');
            cardDescription.setValue('');
        }
    };

    const onChangeCardTitle = (event: any) => {
        cardTitle.setValue(event.target.value);
    };

    const onChangeCardDesc = (event: any) => {
        cardDescription.setValue(event.target.value);
    };

    const closeAddCard = () => {
        cardTitle.setValue('');
        cardDescription.setValue('');
        showAddList.setValue(false);
    };

    return (
        <Fragment>
            {showAddList.value &&
                (<AddCardContainer>
                    <Input value={cardTitle.value} onChange={onChangeCardTitle} />
                    <Input value={cardDescription.value} onChange={onChangeCardDesc} />
                    <Button className='success' onClick={() => onClickAddList(false)}>Add Card</Button>
                    <Button noBorder className='close' onClick={closeAddCard}>X</Button>
                </AddCardContainer>)
            }
            {!showAddList.value && <Button onClick={() => onClickAddList(true)}>Add Card</Button>}
        </Fragment>
    );
}

export default reduxConnect(AddCard, { addCardToList });