
const initialState = {
  show_upload: false
}

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_UPLOAD':
      return { ...state, show_upload: !state.show_upload };
    default:
      return state;
  }
};

export default ModalReducer;
