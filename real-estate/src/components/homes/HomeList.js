import React from 'react';
import { connect } from 'react-redux';
import { fetchHomes } from '../../actions';


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
                  <div className="header">
                     { home.address }
                     <div className="right floated content">
                        <button className="ui button primary">
                           Edit
                        </button>
                        <button className="ui button negative">
                           Delete
                        </button>
                     </div>
                  </div>
                  <div className="description">$ { home.price }</div>
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