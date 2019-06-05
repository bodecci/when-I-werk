const shiftList = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHIFT':
            return action.payload;
        default:
            return state;
    }
};

export default shiftList;