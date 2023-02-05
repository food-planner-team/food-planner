import {createStore} from 'vuex'

import register from './registerModules'

const modules = register()

const store = createStore({
    modules
})
export default store
