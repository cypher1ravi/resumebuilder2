import { SET_IMAGE } from '../actions/profileImgAction'
import porfileImg from '../../images/profileImg.png'
const initialState = {
    imageSrc: porfileImg,
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
