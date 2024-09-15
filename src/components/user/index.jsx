import { connect } from "react-redux"

function User({userValue}) {
    return (
      <div>
        <h1>User Profile</h1>
        <h3>User Info</h3>
        <p>Name  {userValue.userName}</p>
        <p>Status  {userValue.userStatus}</p>
      </div>
    );
}
const mapStateToProps = (state) => ({
    userValue : state,
})
export default connect(mapStateToProps)(User);