import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{location}</h3>
        <h3>instagram: subodh0611</h3>
      </div>
    );
  }
}

export default UserClass;
