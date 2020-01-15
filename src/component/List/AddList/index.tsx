import React, { Fragment, useState } from 'react';
import Button from '../../shared/Button';
import reduxConnect from '../../../store/reduxConnect';
import { addListToBoard } from '../../../actions';
import styled from 'styled-components';
import Input from '../../shared/Input';
// import { IBoard } from '../../../reducers';

const AddListContainer = styled.div`

`;

const AddListButton = styled.button`
    background-color: rgba(255, 255, 255, 0.24);
    cursor: pointer;
    /* background-color: #ebecf0; */
    border-radius: 3px;
    border: none;
    height: auto;
    min-height: 32px;
    padding: 4px;
    transition: background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
    color: #fff;
    width: 272px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;

    &:hover, &:active {
        background-color: rgba(255, 255, 255, 0.32);
        cursor: pointer;
    }
`;

export function AddList({ boardId, addListToBoard }: any) {
    const [showAddList, setShowAddList] = useState(false);
    const [listTitle, setListTitle] = useState('');

    const onClickAddList = (displayAddList = false) => {
        setShowAddList(displayAddList);
        if (!displayAddList) {
            addListToBoard(boardId, listTitle);
            setListTitle('');
        }
    };

    const onChangeListTitle = (event: any) => {
        setListTitle(event.target.value);
    };

    const closeAddList = () => {
        setListTitle('');
        setShowAddList(false);
    };

    return (
        <Fragment>
            {showAddList &&
                (<AddListContainer>
                    <Input type='text' value={listTitle} onChange={onChangeListTitle} />
                    <Button className='success' onClick={() => onClickAddList(false)}>Add List</Button>
                    <Button noBorder className='close' onClick={closeAddList}>X</Button>
                </AddListContainer>)
            }
            {!showAddList && <AddListButton onClick={() => onClickAddList(true)}>Add List</AddListButton>}
        </Fragment>
    );
};

export default reduxConnect(AddList, { addListToBoard })
