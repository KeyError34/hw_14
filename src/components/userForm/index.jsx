import { useState } from 'react';
import { setUserInfo } from '../../redux/actions';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
function UserForm({ updateInfo }) {
  const [userInfo, setUserInfo] = useState({ name: '', status: '' });
  function onChange(e) {
    // e.preventDefault()
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(userInfo);
    updateInfo(userInfo);
    setUserInfo({ name: '', status: '' });
  }
  return (
    <div>
      <h1>Edit User Info</h1>
      <form onSubmit={onSubmit} className={styles.userFormContainer}>
        <label>
          {' '}
          Name{' '}
          <input
            type="text"
            value={userInfo.name}
            name="name"
            onChange={onChange}
            required
          />
        </label>
        <label>
          {' '}
          Status{' '}
          <input
            type="text"
            value={userInfo.status}
            name="status"
            onChange={onChange}
            required
          />
        </label>
        <button type="submit">save</button>
      </form>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  updateInfo: userInfo => dispatch(setUserInfo(userInfo)),
});
export default connect(null, mapDispatchToProps)(UserForm);
