// 数据仓库
// 全局的数据
// 数据发生变化 那么所有使用数据的模板全部自藕丁更新
import Vue from 'vue'
import _state from './_state'
import state from './_state'
const store =Vue.observable(_state)
const mutations={
    increase(){
        state.count++
    }
}

export default {
    state,
    mutations
}