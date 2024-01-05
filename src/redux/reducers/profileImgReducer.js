import { SET_IMAGE } from '../actions/profileImgAction'
const initialState = {
    imageSrc: 'https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-edit-profile-icon-png-image_4102545.jpg',
};

const profileImgReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE:
            return {
                ...state,
                imageSrc: action.payload,
            };
        default:
            return state;
    }
};

export default profileImgReducer;
