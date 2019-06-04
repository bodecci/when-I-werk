const DEFAULT_STATE = [];

const shiftList = (state= DEFAULT_STATE, action) => {
    switch (action.type) {
        case "SET_SHIFT":
            return action.payload;
        default:
            return state;
    }
};

export default shiftList;