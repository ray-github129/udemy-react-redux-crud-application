import React,{Component} from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'



class App extends Component {
	render(){
		//インスタンスのPropsに状態やアクションを渡す
		const props = this.props

		return(
			<React.Fragment>
				<div>value: { props.value }</div>
				<button onClick={props.increment}>+1</button>
				<button onClick={props.decrement}>-1</button>
			</React.Fragment>
			)
	}
}

//stateの情報からコンポーネントで必要な物を取り出してコンポーネント内のpropsをしてマッピングする機能を持つ関数。
//引数には状態のトップレベルを示すStateを書いてどう言ったオブジェクトをpropsとして対応させるのかを関数の戻り値として定義
　const mapStateToProps = state => ( { value: state.count.value } )

//actionが発生したときにreducerにTypeに応じた状態繊維を実行する為の関数をdispatchと呼ぶ。
//incrementとdecrementのボタンクリック時に該当のアクションをdispatchに渡すことで実行させることで状態繊維する
//   const mapDispatchToProops = dispatch => ({
// 	  increment: () => dispatch(increment()),
// 	  decrement: () => dispatch(decrement())
//   })
  // shorthand
  const mapDispatchToProops = ({ increment, decrement})

export default connect(mapStateToProps, mapDispatchToProops)(App)


