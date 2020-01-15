import React, { useEffect, useState } from 'react';
import reduxConnect from '../../store/reduxConnect';
import Board from '../Board';
import { getUserDetails } from '../../helpers/apiService';
import { IUserDetail, IInitialState } from '../../reducers';
import { fetchUserDetails, apiInProgress } from '../../actions';
import { Loader } from '../shared/Loader';

const Dashboard: React.FC = ({ apiInProgress, fetchUserDetails }: any) => {
    const [initialDataLoaded, setInitialDataLoaded] = useState(false);
    useEffect(() => {
        const getUserBoards = async () => {
            apiInProgress(true);
            const userBoards: IUserDetail = await getUserDetails();
            fetchUserDetails(userBoards);
            setInitialDataLoaded(true);
        };
        getUserBoards();
    }, []);
    return (
        <div>
            <div></div>
            {initialDataLoaded && <Board />}
            {!initialDataLoaded && apiInProgress && <Loader />}
        </div>
    );
};

function mapStateToProps(state: IInitialState) {
    return {
        activeBoardId: state.activeBoardId
    };
}

export default reduxConnect(Dashboard, { fetchUserDetails, apiInProgress }, mapStateToProps);