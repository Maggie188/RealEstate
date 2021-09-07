import React from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../../actions';
import { Link } from 'react-router-dom';

class HomeDetails extends React.Component {
   componentDidMount() {
      this.props.fetchHome(this.props.match.params.id)
   }

   render() {
      if (!this.props.home) {
         return <div>Loading...</div>;
      }

      return (
         <div>
            <h3>Details about {this.props.home.address}</h3>
            <table className="ui very basic collapsing celled table">
               <tbody>
                  <tr>
                     <td>
                        <h4>Address</h4>
                     </td>
                     <td>
                x        {this.props.home.address}
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <h4>Price ($)</h4>
                     </td>
                     <td>
                        {this.props.home.price}
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <h4>Year Built</h4>
                     </td>
                     <td>
                        {this.props.home.year}
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <h4>Home Type</h4>
                     </td>
                     <td>
                        {this.props.home.type}
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <h4>Number of Bedroom</h4>
                     </td>
                     <td>
                        {this.props.home.bed}
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <h4>Number of Bathroom</h4>
                     </td>
                     <td>
                        {this.props.home.bath}
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <h4>Square Feet</h4>
                     </td>
                     <td>
                        {this.props.home.squarefeet}
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <h4>Lot Size</h4>
                     </td>
                     <td>
                        {this.props.home.lot}
                     </td>
                  </tr>
               </tbody>
            </table>
            <Link to="/" className="ui right floated button">Back</Link>
         </div>
      );
   };
};

const mapStateToProps = (state, ownProps) => {
   return { home: state.homes[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchHome })(HomeDetails);