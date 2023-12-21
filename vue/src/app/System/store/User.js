const getDefaultState = () => {
    return {
        user: {
            data: null,
            token: localStorage.getItem("TOKEN"),
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
        getUserId(state) {
            return state.user.data.id;
        },
        getKcalLimit(state) {
            return state.user.data.kcal_limit;
        },
    },
    actions: {},
};
