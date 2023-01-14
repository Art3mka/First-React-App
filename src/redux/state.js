const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Привет!', likesCount: 30 },
            { id: 2, message: 'Это мое', likesCount: 20 },
            { id: 3, message: 'Первое приложение!', likesCount: 35 },
        ],
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

export default state;