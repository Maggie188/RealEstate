import React from 'react';
import { connect } from 'react-redux';
import { fetchHome, editHome } from '../../actions';

class HomeEdit extends React.Component {
   componentDidMount() {
      this.props.fetchStream(this.props.match.params.id)
   }

   render() {
      if (!this.props.home) {
         return <div>Loading...</div>;
      }
      
      return (

      )
   }
}

const mapStateToProps = (state, ownProps) => {
   return { homes: state.homes[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchHome, editHome })(HomeEdit);