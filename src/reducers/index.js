import { combineReducers } from 'redux'
// 状態を持つカウント(reducer)
import events from './events'

//引数に状態を持たせるreducerを書く。(複数可)
export default combineReducers({events})
//export default combineReducers({foo,bar.count})