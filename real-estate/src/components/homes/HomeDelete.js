import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHome, deleteHome } from '../../actions';


class HomeDelete extends React.Component {
   componentDidMount() {
      this.props.fetchHome(this.props.match.params.id)
   }

   renderActions() {
      console.log(this.props);

      const { id } = this.props.match.params;

      return (
         <React.Fragment>
            <Link to="/" className="ui button">Cancel</Link>
            <button onClick={() => this.props.deleteHome(id)} className="ui primary button">Delete</button>
         </React.Fragment>
      );
   }
  
   renderContent() {
     if (!this.props.home) {
        return 'Are you sure you want to delete this home?'
     }

     return `Are you sure you want to delete the home at ${this.props.home.address}?`
   }

   render() {
      return (
         <Modal
            title="Delete Home"
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}
         />
      ); 
   }
}

const mapStateToProps = (state, ownProps) => {
   return {home: state.homes[ownProps.match.params.id]}
}
export default connect(mapStateToProps, { fetchHome, deleteHome })(HomeDelete);