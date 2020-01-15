import React from 'react';
import reduxConnect from '../../store/reduxConnect';
import Board from '../Board';

const Dashboard: React.FC = (props: any) => {
    console.log(props);
    return (
        <div>
            <div>
                Dashboard
            </div>
            <Board />
        </div>
    );
};

export default reduxConnect(Dashboard, null);