import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
})


const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);