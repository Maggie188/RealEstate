import React from 'react';
import { connect } from 'react-redux';
import { createHome } from '../../actions';
import HomeForm from './HomeForm';


class HomeCreate extends React.Component {
   onSubmit = formValues => {
      this.props.createHome(formValues);
   };

   render() {
      return (
         <div>
            <h3>Add a Home</h3>
            <HomeForm onSubmit={this.onSubmit} />
         </div>
         
      );
   }
};

export default connect(null, { createHome })(HomeCreate);