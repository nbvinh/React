const isFilterStatus = (state = 'SHOW_ALL', action) => {
    if (action.type === 'FILETR_SHOW') return 'SHOW_ALL';
    if (action.type === 'FILETR_MEMORIZED') return 'MEMORIZED';
    if (action.type === 'NEED_PRACTICE') return 'NEED_PRACTICE';
    return state;
}
export default isFilterStatus;