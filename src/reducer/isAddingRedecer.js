const isAddingRedecer = (state = false, action) => {
    if (action.type === 'TONGLE_ISADDING') return !state;
    return state
}
export default isAddingRedecer;