import React from 'react';
import Modal from '../Modal';


const HomeDelete = () => {
   const actions = (
      <React.Fragment>
         <button className="ui button">Cancel</button>
         <button className="ui primary button">Delete</button>
      </React.Fragment>
   );

   return (
      <div>
         <Modal 
            title="Delete Home"
            content="Are you sure you want to delete this home?"
            actions={actions}
         />
      </div>
   ); 
};

export default HomeDelete;