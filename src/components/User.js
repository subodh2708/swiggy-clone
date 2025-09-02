function User(props) {
  const { name, location } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h3>{location}</h3>
      <h3>instagram: subodh0611</h3>
    </div>
  );
}

export default User;
