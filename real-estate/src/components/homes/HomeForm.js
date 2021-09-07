import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';


class HomeForm extends React.Component {
   renderError({ error, touched }) {
      if (touched && error) {
         return (
            <div className="ui error message">
               <div className="header">{error}</div>
            </div>
         );
      }
   }

   renderInput = ({ input, label, meta }) => {
      const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

      return (
         <div className={className}>
            <label>{label}</label>
            <input {...input} />
            {this.renderError(meta)}
         </div>
      )
   }

   renderSelect = ({label, children, meta, input}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return  (
            <div className={className}>
                <label>{label}</label>
                <select {...input} >
                    {children}
                </select>
                {this.renderError(meta)}
            </div>
        );
    }

   onSubmit = formValues => {
      this.props.onSubmit(formValues);
   };



   render() {
      return (
         <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <Field name="address" component={this.renderInput} label="Address" />
            <Field name="price" component={this.renderInput} label="List Price ($)" />
            <Field name="year" component={this.renderInput} label="Year Built" />
            <Field name="type" component={this.renderSelect} label="Home Type">
                <option />
                <option value="HO">Houses</option>
                <option value="TH">Townhomes</option>
                <option value="MF">Multi-family</option>
                <option value="CO">Condons/Co-ops</option>
                <option value="LO">Lots/Land</option>
                <option value="AP">Apartments</option>
                <option value="MA">Manufactured</option>
            </Field>
            <Field name="bed" component={this.renderInput} label="Number of Bedroom" />
            <Field name="bath" component={this.renderInput} label="Number of Bathroom" />
            <Field name="squarefeet" component={this.renderInput} label="Square Feet" />
            <Field name="lot" component={this.renderInput} label="Lot Size" />
            <button type="submit" className="ui right floated button primary">Save</button>
            <Link to="/" className="ui right floated button">Discard</Link>
         </form>
      );
   }
};

const validate = formValues => {
   const errors = {};

   if (!formValues.address) {
      errors.address = 'Please enter the address';
   }

   if (!formValues.price) {
      errors.price = 'Please enter the price';
   }

   return errors;
};

export default reduxForm({
   form: 'homeForm',
   validate
})(HomeForm);