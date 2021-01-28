
const arrWords = [
    { id: 1, en: 'action', vn: 'hanh dong', memorized: true, isShow: false },
        { id: 2, en: 'actor', vn: 'Dien vien', memorized: false, isShow: false },
        { id: 3, en: 'activity', vn: 'hoat dong', memorized: true, isShow: false },
        { id: 4, en: 'active', vn: 'chu dong', memorized: true, isShow: false },
        { id: 5, en: 'bath', vn: 'tam', memorized: false, isShow: false },
        { id: 6, en: 'bedroom', vn: 'phong ngu', memorized: true, isShow: false },
        { id: 7, en: 'yard', vn: 'hom qua', memorized: false, isShow: false },
        { id: 8, en: 'yesterday', vn: 'tre', memorized: true, isShow: false },
        { id: 9, en: 'young', vn: 'hanh dong', memorized: true, isShow: false },
        { id: 10, en: 'zero', vn: 'hanh dong', memorized: false, isShow: false },
        { id: 11, en: 'anbandon', vn: 'hanh dong', memorized: true, isShow: false },
        { id: 12, en: 'above', vn: 'hanh dong', memorized: false, isShow: false },
        { id: 13, en: 'against', vn: 'hanh dong', memorized: true, isShow: false },
        { id: 14, en: 'arrange', vn: 'hanh dong', memorized: false, isShow: false },
];

const arrWordsReducer = (state = arrWords, action) => {
    if (action.type === 'MEMORIZED') return state.map(e => {
        if (e.id === action.id) return { ...e, memorized: !e.memorized }
        return e;
    })
    if (action.type === 'TONGLE_SHOW') return state.map(e => {
        if (e.id === action.id) return { ...e, isShow: !e.isShow };
        return e;
    })
    if (action.type === "ADD_WORD") return [{
        id: state.length + 1,
        en: action.en,
        vn: action.vn,
        memorized: false,
        isShow: false,
    }].concat(state)
    return state;
}
export default arrWordsReducer;