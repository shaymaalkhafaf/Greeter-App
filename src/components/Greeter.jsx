import React from 'react';
console.log("React is ",React);
class Greeter extends React.Component {
	render() {
		return (
            <>
			<h2>Hello again! {this.props.name}</h2>
            <p>I am {this.props.age} Years old!</p>
</>
		);
	}
}

export default Greeter;