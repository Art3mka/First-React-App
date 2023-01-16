import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Привет!', likesCount: 30 },
            { id: 2, message: 'Это мое', likesCount: 20 },
            { id: 3, message: 'Первое приложение!', likesCount: 35 },
        ],
        newPostText: `блаблабла`
    },
    messagesPage: {
        dialogs: [
            { id: 1, name: 'Sonya' },
            { id: 2, name: 'Masik' },
            { id: 3, name: 'VlaDick' },
            { id: 4, name: 'Lazuta' },
            { id: 5, name: 'Karliuk' },
        ],
        messages: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'how r u' },
            { id: 3, message: 'r u ok?' },
        ],
    },
}

export const addPost = () => {
    const newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;