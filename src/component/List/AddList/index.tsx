import React, { Fragment, useState } from 'react';
import Button from '../../shared/Button';
import reduxConnect from '../../../store/reduxConnect';
import { addListToBoard } from '../../../actions';
import styled from 'styled-components';
import Input from '../../shared/Input';
// import { IBoard } from '../../../reducers';

const AddListContainer = styled.div`
    background-color: #ebecf0;
    border-radius: 3px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
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
    max-width: 272px;
    min-width: 272px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;

    &:hover, &:active {
        background-color: rgba(255, 255, 255, 0.32);
        cursor: pointer;
    }
`;

const ButtonWrapper = styled.div`
    padding: 5px 10px;
`;

const CloseButton = styled(Button)`
    background-color: transparent;
    margin-left: 5px;
    &:hover, &:active {
        color: #000;
        background-color: #fff;
    }
`;

export function AddList({ boardId, addListToBoard }: any) {
    const [showAddList, setShowAddList] = useState(false);
    const [listTitle, setListTitle] = useState('');

    const onClickAddList = (displayAddList = false) => {
        if (!displayAddList && !listTitle) {
            return;
        }
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
                    <Input placeholder='Enter list title...' type='text' value={listTitle} onChange={onChangeListTitle} />
                    <ButtonWrapper>
                        <Button className='success' onClick={() => onClickAddList(false)}>Add List</Button>
                        <CloseButton noBorder className='close' onClick={closeAddList}>X</CloseButton>
                    </ButtonWrapper>
                </AddListContainer>)
            }
            {!showAddList && <AddListButton onClick={() => onClickAddList(true)}>+ Add List</AddListButton>}
        </Fragment>
    );
};

export default reduxConnect(AddList, { addListToBoard })
