import React from 'react';
import { connect } from 'react-redux';
import { fetchHomes } from '../../actions';
import { Link } from 'react-router-dom';

class HomeList extends React.Component {
   componentDidMount() {
      this.props.fetchHomes();
   }

   renderList() {
      return this.props.homes.map(home => {
         return (
            <div className="item" key={ home.id }>
               <i className="large home icon"></i>
               <div className="content">
                  <div className="ui grid">
                     <h4 className="eight wide column">
                        <Link to={`/homes/details/${home.id}`}>{ home.address }</Link>
                     </h4>
                     <div className="three wide column header">$ { home.price }</div>
                     <div className="five wide column">
                        <div className="right floated content">
                           <Link to={`/homes/edit/${home.id}`} className="tiny ui button primary">
                              Edit
                           </Link>
                           <Link to={`/homes/delete/${home.id}`} className="tiny ui button negative">
                              Delete
                           </Link>
                           <button className="tiny ui olive button">
                              Monthly cost 
                           </button>
                        </div>
                     </div>
                  </div> 
                  <div className="ui form">
                     <div className="field">
                        <textarea rows="1" placeholder="I like this home because..."></textarea>
                     </div>
                  </div>
               </div> 
            </div>
         )
      })
   }


   render() {
      return (
         <div>
            <h2>Homes List</h2>
            <div className="ui celled list">
               {this.renderList()}
            </div>
         </div>
      );
   };
};

const mapStateToProps = state => {
   return { homes: Object.values(state.homes) };
}

export default connect(mapStateToProps, { fetchHomes })(HomeList);