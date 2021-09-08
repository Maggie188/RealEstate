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
               <div className="icon">
                  <i className="large home icon"></i>
               </div>
               <div className="content">
                  <Link className="header" to={`/homes/details/${home.id}`}>{ home.address }</Link>
                  <div className="meta">$ { home.price }</div>
                  <div className="ui form">
                     <div className="field">
                        <textarea rows="1" placeholder="I like this home because..."></textarea>
                     </div>
                  </div>
                  <div className="extra">
                     <div className="right floated content">
                        <Link to={`/homes/edit/${home.id}`} className="tiny ui button primary">
                           Edit
                        </Link>
                        <Link to={`/homes/delete/${home.id}`} className="tiny ui button negative">
                           Delete
                        </Link>
                        <Link to={`/homes/monthlycost/${home.id}`} className="tiny ui olive button">
                           Monthly cost 
                        </Link>
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
            <div className="ui divided items">
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