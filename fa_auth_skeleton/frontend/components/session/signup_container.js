import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

// no mapStateToProps because creating a new user does not depend on any part of state

const mapDispatchToProps = dispatch => ({
    // what is this doing?
    createNewUser: formUser => dispatch(createNewUser(formUser)),
})

export default connect(null, mapDispatchToProps)(Signup);