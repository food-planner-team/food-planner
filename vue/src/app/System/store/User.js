const getDefaultState = () => {
    return {
        user: {
            data: null,
            token: sessionStorage.getItem("TOKEN"),
        },
    };
};

export default {
    namespaced: true,
    state: getDefaultState(),
    mutations: {
        setUser(state, data) {
            state.user.data = data;
        },
    },
    getters: {
        getUser(state) {
            return state.user.data;
        },
    },
    actions: {},
};
