import React from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../../actions';

class MonthlyCost extends React.Component {
   state = { 
      homeprice : 0, 
      downpayamt: 0,
      downpayrate: 20,
      interest: 2.828,
      loanterm: "1"
   }


   componentDidMount() {
      this.onFetchHome();
   }
   
   onFetchHome = async () => {
      await this.props.fetchHome(this.props.match.params.id);

      this.setState({ homeprice: this.props.home.price })
      this.setState({ downpayamt: this.props.home.price * this.state.downpayrate / 100})
   };
   
   
   priceChange = e => {
      const value = e.target.value
      if (this.state.homeprice !== value)
         this.setState({ homeprice : value })
      const downPayAmt = value * this.state.downpayrate / 100
      if (this.state.downpayamt !== downPayAmt)
         this.setState({ downpayamt : downPayAmt})
   }

   downpayamtChange = e => {
      const value = e.target.value
      if (this.state.downpayamt !== value)
         this.setState({ downpayamt : value })
      const downPayRate = value / this.state.homeprice
      if (this.state.downpayrate !== downPayRate)
         this.setState({ downpayrate : downPayRate })
   }

   downpayrateChange = e => {
      const value = e.target.value
      if (this.state.downpayrate !== value)
         this.setState({ downpayrate : value})
      const downPayAmt = value * this.state.homeprice / 100
      if (this.state.downpayamt !== downPayAmt)
         this.setState({ downpayamt : downPayAmt })
   }

   loantermChange = e => {
      const value = e.target.value
      if (this.state.loanterm !== value)
         this.setState({ loanterm: value })
   }

   interestChange = e => {
      const value = e.target.value
      if (this.state.interest !== value)
         this.setState({ interest : value })
   }

   render() {
      if (!this.props.home) {
         return <div>Loading...</div>;
      }

      console.log(this.state)

      const price = this.props.home.price;
      // const downpayment = parseInt(this.state.homeprice, 10) * this.state.downpayrate / 100

      const monthlyInterest = this.state.interest / 1200
      const numberOfMonths = `${this.state.loanterm === "1" ? 360 : 180}`
      const listPrice = parseInt(this.state.homeprice, 10)
      const principal = listPrice - this.state.downpayamt
      const tmp = (1 + monthlyInterest) ** numberOfMonths
      const tmppayment = principal * ((monthlyInterest * tmp) / (tmp - 1))
      const payment = tmppayment.toFixed(2)

      return (
         <div>
            <h2 className="ui dividing header">
               <i className="dollar sign icon"></i>
               <div className="content">
                  Monthly Cost
               </div>
            </h2>
            <div className="ui styled accordion">
               <h4 className="ui top centered attached header">
                  <div>Estimated monthly cost</div>
                  <div>$</div>
               </h4>
               <div className="title active">
                  <i className="dropdown icon"></i>
                  <span>Principal & interest</span>
                  <span className="ui right floated header">{`$ ${payment}`}</span>
               </div>
               <div className="active content">
                  <form className="ui form">
                     <div className="field">
                        <label>Home Price</label>
                        <div className="ui labeled input">
                           <label className="ui label">$</label>
                           <input type="number" name="price" defaultValue={price} onChange={(e) => this.priceChange(e)} />
                        </div>
                     </div>
                     <div className="field">
                        <label>Down payment</label>
                        <div className="fields">
                           <div className="twelve wide field">
                              <div className="ui labeled input">
                                 <label className="ui label">$</label>
                                 <input type="number" name="downpaymentamount" value={this.state.downpayamt} onChange={(e) => this.downpayamtChange(e)} />
                              </div>
                           </div>
                           <div className="four wide field">
                              <div className="ui right labeled input">
                                 <input type="number" name="downpaymentrate" value={this.state.downpayrate} onChange={(e) => this.downpayrateChange(e)} />
                                 <div className="ui basic label">%</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="field">
                        <div className="fields">
                           <div className="twelve wide field">
                              <label>Loan program</label>
                              <select className="ui search dropdown" onChange={(e) => this.loantermChange(e)}>
                                 <option value="1">30-year fixed</option>
                                 <option value="2">15-year fixed</option>
                              </select>
                           </div> 
                           <div className="four wide field">
                              <label>Interest rate</label>
                              <div className="ui right labeled input">
                                 <input type="float" name="interest" value={this.state.interest} onChange={(e) => this.interestChange(e)} />
                                 <div className="ui basic label">%</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      )
   }
};


const mapStateToProps = (state, ownProps) => {
   return { home: state.homes[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchHome })(MonthlyCost);