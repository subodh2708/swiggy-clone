import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count2 } = this.state;

    return (
      <div>
        <h1>{name}</h1>
        <h2>{this.state.count}</h2>
        <h2>{count2}</h2>
        <h3>{location}</h3>
        <h3>instagram: subodh0611</h3>
      </div>
    );
  }
}

export default UserClass;
