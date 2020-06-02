import { combineReducers } from 'redux'
// 状態を持つカウント(reducer)
import count from './count'

//引数に状態を持たせるreducerを書く。(複数可)
export default combineReducers({count})
//export default combineReducers({foo,bar.count})