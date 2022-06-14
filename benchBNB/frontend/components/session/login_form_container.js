import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});


const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);