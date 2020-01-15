import React, { Fragment, useState } from 'react';
import styled from "styled-components";
import { ICard } from '../../reducers';
import Button from '../shared/Button';

const CardItem = styled.div`
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

const CardModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

const CardModalContent = styled.div`
    width: 380px;
    min-height: 200px;
    margin: 20% auto;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
`;

const CardModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    align-items: center;
`;

const CardTitle = styled.div`
    flex: 1;
    font-size: 20px;
    font-weight: 600;
`;

const CardModalBody = styled.div`
    display: flex;
    flex: 1;
    padding: 10px 0;
`;

const CardModalButton = styled(Button)`

`;

const Card: React.FC<ICard> = ({ cardId, title, description }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <Fragment>
            <CardItem onClick={toggleModal}>{title}</CardItem>
            {showModal &&
                (<CardModalContainer>
                    <CardModalContent>
                        <CardModalHeader>
                            <CardTitle>
                                {title}
                            </CardTitle>
                            <CardModalButton noBorder onClick={toggleModal}>X</CardModalButton>
                        </CardModalHeader>
                        <CardModalBody>
                            {description}
                        </CardModalBody>
                    </CardModalContent>
                </CardModalContainer>)
            }
        </Fragment>
    );
};

export default Card;