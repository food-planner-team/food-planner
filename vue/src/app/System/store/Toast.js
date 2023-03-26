const getDefaultState = () => {
    return {
        items: [],
    };
};

export default {
    namespaced: true,
    state: getDefaultState(),
    mutations: {
        addToast(state, { message, type }) {
            state.items.unshift({
                key: Symbol(),
                message,
                type,
            });
        },
        removeToast(state, toast) {
            const index = state.items.indexOf(toast);
            if (index > -1) {
                state.items.splice(index, 1);
            }
        },
    },
    getters: {
        getToasts(state) {
            return state.items;
        },
    },
    actions: {},
};
