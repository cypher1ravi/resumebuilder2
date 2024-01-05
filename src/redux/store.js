import { createStore, combineReducers } from 'redux';
import personalInfoReducer from './reducers/personalInfoReducer';
import educationReducer from './reducers/educationReducer';
import workDetailsReducer from './reducers/workDetailsReducer';
import keySkillsReducer from './reducers/keySkillsReducer';
import selectCardReducer from './reducers/selectCardReducer'
import profileImgReducer from './reducers/profileImgReducer';

const rootReducer = combineReducers({
    personalInformation: personalInfoReducer,
    education: educationReducer,
    workDetails: workDetailsReducer,
    keySkills: keySkillsReducer,
    selectedCard: selectCardReducer,
    profileImg: profileImgReducer
});

const store = createStore(rootReducer);

export default store;
