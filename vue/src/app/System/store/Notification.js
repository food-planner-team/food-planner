const getDefaultState = () => {
    return {
        notification: {
            show: false,
            type: 'success',
            message: ''
        }
    }
}

export default {
    namespaced: true,
    state: getDefaultState(),
    mutations: {
        notify(state, { message, type }) {
            state.notification.message = message
            state.notification.type = type
            state.notification.show = true
            setTimeout(() => {
                state.notification.show = false
            }, 4000)
        }
    },
    getters: {},
    actions: {}
}
