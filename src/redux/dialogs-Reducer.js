const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";


//DialogsPage AC
export const onNewMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});
export const onNewMessageSendActionCreator = () => ({type: SEND_MESSAGE});

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessage;
            return state;
        case SEND_MESSAGE:
            state.messages.push({id: 5, message: state.newMessage });
            state.newMessage = '';
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;