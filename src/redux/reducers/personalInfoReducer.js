import { UPDATE_PERSONAL_INFO } from '../actions/personalInfoActions'
const initialState = {
    firstName: 'jone',
    lastName: 'Doe',
    title: 'Web dev',
    email: 'jonedoe@gmail.com',
    phone: '123456',
    address: 'london',
    objective: "Hi everyone, I am a web front-end developer, graduated from NTHU, Taiwan and my major is CS. I    recently try my best to improve my skills on web front-end. My favorite thing is to observe others'    portfolio.'",
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
};

const personalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PERSONAL_INFO:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default personalInfoReducer;
