import React from 'react';
import { connect } from 'react-redux';
import { fetchHome, editHome } from '../../actions';
import HomeForm from './HomeForm';

class HomeEdit extends React.Component {
   componentDidMount() {
      this.props.fetchHome(this.props.match.params.id)
   }

   onSubmit = formValues => {
      this.props.editHome(this.props.match.params.id, formValues)
   }

   
   render() {
      if (!this.props.home) {
         return <div>Loading...</div>;
      }

      const { id, ...initialValues } = this.props.home;

      return (
         <div>
            <h3>Edit the Home</h3>
            <HomeForm 
               initialValues ={ initialValues }
               onSubmit={this.onSubmit} 
            />
      </div> 
      )
   }
}

const mapStateToProps = (state, ownProps) => {
   return { home: state.homes[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchHome, editHome })(HomeEdit);