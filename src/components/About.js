import User from "./User";
import UserClass from "./UserClass";
const About = function () {
  return (
    <div>
      <h1>About page</h1>
      {/* <User name="Subodh FC" location="Lucknow FC" /> */}
      <UserClass name="Subodh Class" location="Lucknow Class" />
    </div>
  );
};
export default About;
