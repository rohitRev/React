function homeReducer(state = null, action) {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return state
        .set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homeReducer;