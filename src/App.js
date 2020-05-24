import React from 'react';


// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

const App = () => {
	const profiles =[
		{name : "Taro", age : 10},
		{name :"Hana" , age : 20},
		{name : "Non Age"}
	]
	return(
		<div>
		{	
			profiles.map((profile, index) =>{
				return <User name={profile.name} age={profile.age} key={index}/>
			})
		}
		</div>
	)	
}

const User = (props) =>{
	return(
	<div>
		Hi, I am {props.name}! 
		{props.age}years.
	</div>
	)
}

User.defaultProps={
	age : 1
}

export default App;
