import React from 'react';
import reduxConnect from '../../store/reduxConnect';
import Button from '../shared/Button';

const Board: React.FC = (props: any) => {
    console.log(props);
    return (
        <div>Board 
            <Button noBorder>Click Me</Button>
            <Button size='sm'>Click Me</Button>
            <Button size='lg'>Click Me</Button>
        </div>
    );
};

export default reduxConnect(Board, null);