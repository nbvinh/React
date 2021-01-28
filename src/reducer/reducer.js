import { combineReducers } from "redux";
import arrWordsReducer from "./arrWordsReducer";
import isAddingRedecer from "./isAddingRedecer";
import isFilterStatus from "./isFilterStatus";

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: isFilterStatus,
    isAdding: isAddingRedecer,
});

export default reducer;



// const initalState = {
//     arrWords: [
//         { id: 1, en: 'action', vn: 'hanh dong', memorized: true, isShow: false },
//         { id: 2, en: 'actor', vn: 'Dien vien', memorized: false, isShow: false },
//         { id: 3, en: 'activity', vn: 'hoat dong', memorized: true, isShow: false },
//         { id: 4, en: 'active', vn: 'chu dong', memorized: true, isShow: false },
//         { id: 5, en: 'bath', vn: 'tam', memorized: false, isShow: false },
//         { id: 6, en: 'bedroom', vn: 'phong ngu', memorized: true, isShow: false },
//         { id: 7, en: 'yard', vn: 'hom qua', memorized: false, isShow: false },
//         { id: 8, en: 'yesterday', vn: 'tre', memorized: true, isShow: false },
//         { id: 9, en: 'young', vn: 'hanh dong', memorized: true, isShow: false },
//         { id: 10, en: 'zero', vn: 'hanh dong', memorized: false, isShow: false },
//         { id: 11, en: 'anbandon', vn: 'hanh dong', memorized: true, isShow: false },
//         { id: 12, en: 'above', vn: 'hanh dong', memorized: false, isShow: false },
//         { id: 13, en: 'against', vn: 'hanh dong', memorized: true, isShow: false },
//         { id: 14, en: 'arrange', vn: 'hanh dong', memorized: false, isShow: false },
//     ],
//     filterStatus: 'SHOW_ALL',
//     isAdding: false
// };

// const reducer = (state = initalState, action) => {
//     switch (action.type) {
//         case 'FILETR_SHOW':
//             return { ...state, filterStatus: 'SHOW_ALL' }
//         case 'FILETR_MEMORIZED':
//             return { ...state, filterStatus: 'MEMORIZED' }
//         case 'NEED_PRACTICE':
//             return { ...state, filterStatus: 'NEED_PRACTICE' }
//         case 'MEMORIZED':
//             return {
//                 ...state,
//                 arrWords: state.arrWords.map(e => {
//                     if (e.id === action.id) return { ...e, memorized: !e.memorized };
//                     return e;
//                 })
//             }
//         case 'TONGLE_SHOW':
//             return {
//                 ...state,
//                 arrWords: state.arrWords.map(e => {
//                     if (e.id === action.id) return { ...e, isShow: !e.isShow };
//                     return e;
//                 })
//             }
//         case 'TONGLE_ISADDING':
//             return { ...state, isAdding: !state.isAdding }
//         case 'ADD_WORD':
//             return {
//                 ...state,
//                 arrWords: [{
//                     id: state.arrWords.length + 1,
//                     en: action.en,
//                     vn: action.vn,
//                     memorized: false,
//                     isShow: false,
//                 }].concat(state.arrWords)
//             }
//         default:
//             return state
//     }
// }
// export default reducer







// axios.post('http://175.41.184.177:6061/api/v1.0/customer/send-otp',{
//     "phone_number": "0834006171"
//   })
//   .then(function (response) {
//       if(response.errorCode === 1){
//           navigation...
//       }else {

//       }
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });



// fetch('http://175.41.184.177:6061/api/v1.0/customer/send-otp', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     "phone_number": "0834006171"
//   })
// }).then((response) => response.json())
//         .then((responseData) => {
//             console.log(
//                 "POST Response",
//                 "Response Body -> " + JSON.stringify(responseData)
//             )
//         })
//         .done();F;