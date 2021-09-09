import React from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../../actions';

class MonthlyCost extends React.Component {
   state = { 
      homeprice : 0, 
      downpayamt: 0,
      downpayrate: 20,
      interest: 2.828,
      loanterm: "1",
      taxrate: 0.81,
      homeinsurance: 0,
      hoa: 0,
      principalActive: false,
      taxActive: false,
      insuranceActive: false,
      hoaActive: false,
      utilityActive: false,
      checked: false,
      water: 0,
      gas: 0,
      internet: 0,
      electric: 0
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
      if (!value)
         this.setState({ downpayamt : 0 })
      else if (this.state.downpayamt !== value)
         this.setState({ downpayamt : value })
      const downPayRate = value / this.state.homeprice * 100
      if (this.state.downpayrate !== downPayRate)
         this.setState({ downpayrate : downPayRate })
   }

   downpayrateChange = e => {
      const value = e.target.value
      if (!value)
         this.setState({ downpayrate : 0 })
      else if (this.state.downpayrate !== value)
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
      if (!value)
         this.setState({ interest : 0 })
      else if (this.state.interest !== value)
         this.setState({ interest : value })
   }

   taxratechange = e => {
      const value = e.target.value
      if (!value)
         this.setState({ taxrate : 0 })
      else if (this.state.taxrate !== value)
         this.setState({ taxrate : value })
   }
   

   inschange = e => {
      const value = e.target.value
      if (!value)
         this.setState({ homeinsurance : 0 })
      else if (this.state.homeinsurance !== value)
         this.setState({ homeinsurance : value })
   }

   hoachange = e => {
      const value = e.target.value
      if (!value)
         this.setState({ hoa : 0 })
      else if (this.state.hoa !== value)
         this.setState({ hoa : value })
   }

   waterchange = e => {
      const value = e.target.value
      if (!value)
         this.setState({ water : 0 })
      else if (this.state.water !== value)
         this.setState({ water : value })
   }

   gaschange = e => {
      const value = e.target.value
      if (!value)
         this.setState({ gas : 0 })
      else if (this.state.gas !== value)
         this.setState({ gas : value })
   }

   internetchange = e => {
      const value = e.target.value
      if (!value)
         this.setState({ internet : 0 })
      else if (this.state.internet !== value)
         this.setState({ internet : value })
   }

   electricchange = e => {
      const value = e.target.value
      if (!value)
         this.setState({ electric : 0 })
      else if (this.state.electric !== value)
         this.setState({ electric : value })
   }

   onChecked = e => {
      const value = e.target.checked
      if (value === false) {
         if (this.state.checked !== value)
            this.setState({ checked : value})
      }
      else if (value === true) {
         if (this.state.checked !== value)
            this.setState({ checked : value})
      }
   }

   onPrincipalClick = () => {
      if (this.state.principalActive === false)
         this.setState({ principalActive: true })
      else this.setState({ principalActive: false })
   }

   onTaxClick = () => {
      if (this.state.taxActive === false)
         this.setState({ taxActive: true })
      else this.setState({ taxActive: false })
   }

   onInsuranceClick = () => {
      if (this.state.insuranceActive === false)
         this.setState({ insuranceActive: true })
      else this.setState({ insuranceActive: false })
   }

   onHOAClick = () => {
      if (this.state.hoaActive === false)
         this.setState({ hoaActive: true })
      else this.setState({ hoaActive: false })
   }

   onUtilityClick = () => {
      if (this.state.utilityActive === false)
         this.setState({ utilityActive: true })
      else this.setState({ utilityActive: false })
   }
   
   
   render() {
      if (!this.props.home) {
         return <div>Loading...</div>;
      }

      console.log(this.state)

      const price = this.props.home.price;
      
      
      const monthlyInterest = this.state.interest / 1200
      const numberOfMonths = `${this.state.loanterm === "1" ? 360 : 180}`
      const listPrice = parseInt(this.state.homeprice, 10)
      const principal = listPrice - this.state.downpayamt
      const tmp = (1 + monthlyInterest) ** numberOfMonths
      const tmppayment = principal * ((monthlyInterest * tmp) / (tmp - 1))
      const payment = tmppayment.toFixed(2)

      const tmpYearlyPropTax = this.state.homeprice * this.state.taxrate / 100
      const yearlyPropTax = tmpYearlyPropTax.toFixed(2)
      const monthlyPropTax = yearlyPropTax / 12

      const tmpHomeInsurance = this.state.homeinsurance / 12
      const homeInsurance = tmpHomeInsurance.toFixed(2)

      const tmpUtility = parseFloat(this.state.water) + parseFloat(this.state.gas) + parseFloat(this.state.internet) + parseFloat(this.state.electric)
      const utility = this.state.checked === true ? tmpUtility : 0

      const tmpMonthlyCost = parseFloat(payment) + parseFloat(monthlyPropTax) + parseFloat(homeInsurance) + parseFloat(this.state.hoa) + parseFloat(utility)
      const monthlyCost = tmpMonthlyCost.toFixed(2)

      const principalActive = this.state.principalActive === true ? 'active' : '';
      const taxActive = this.state.taxActive === true ? 'active' : '';
      const insuranceActive = this.state.insuranceActive === true ? 'active' : '';
      const hoaActive = this.state.hoaActive === true ? 'active' : '';
      const utilityActive = this.state.utilityActive === true ? 'active' : '';

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
                  <div>{`$ ${monthlyCost}`}</div>
               </h4>
               <div className={`title ${principalActive}`} onClick={() => this.onPrincipalClick()}>
                  <i className="dropdown icon"></i>
                  <span>Principal & interest</span>
                  <span className="ui right floated header">{`$ ${payment} / mo`}</span>
               </div>
               <div className={`${principalActive} content`} >
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

               <div className={`title ${taxActive}`} onClick={() => this.onTaxClick()}>
                  <i className="dropdown icon"></i>
                  <span>Property taxes</span>
                  <span className="ui right floated header">{`$ ${monthlyPropTax} / mo`}</span>
               </div>
               <div className={`${taxActive} content`} >
                  <div className="ui equal width padded grid">
                     <div className="row">
                        <div className="left aligned five wide column">
                           Home price
                        </div>
                        <div className="left aligned ten wide column">
                           Tax rate
                        </div>
                     </div>
                     <div className="row">
                        <div className="left middle aligned three wide column">
                           {`$ ${this.state.homeprice}`}
                        </div>
                        <div className="left middle aligned two wide column">
                           ✖️
                        </div>
                        <div className="ui right labeled mini input three wide colum">
                           <input type="float" value={this.state.taxrate} onChange={(e) => this.taxratechange(e)}/>
                           <div className="ui basic label">%</div>
                        </div>
                        <div className="center middle aligned one wide column">
                           =
                        </div>
                        <div className="center middle aligned four wide column">
                           {`$ ${yearlyPropTax} / year`}
                        </div>
                     </div>
                  </div>
               </div>

               <div className={`title ${insuranceActive}`} onClick={() => this.onInsuranceClick()}>
                  <i className="dropdown icon"></i>
                  <span>Home insurance</span>
                  <span className="ui right floated header">{`$ ${homeInsurance} / mo`}</span>
               </div>
               <div className={`${insuranceActive} content`}>
                  <div className="ui right labeled input">
                     <label className="ui label">$</label>
                     <input type="float" value={this.state.homeinsurance} onChange={(e) => this.inschange(e)} />
                     <div className="ui basic label">/year</div>
                  </div>
               </div>

               <div className={`title ${hoaActive}`} onClick={() => this.onHOAClick()}>
                  <i className="dropdown icon"></i>
                  <span>HOA fees</span>
                  <span className="ui right floated header">{`$ ${this.state.hoa} / mo`}</span>
               </div>
               <div className={`${hoaActive} content`}>
                  <div className="ui right labeled input">
                     <label className="ui label">$</label>
                     <input type="float" value={this.state.hoa} onChange={(e) => this.hoachange(e)} />
                     <div className="ui basic label">/mo</div>
                  </div>
               </div>

               <div className={`title ${utilityActive}`} onClick={() => this.onUtilityClick()}>
                  <i className="dropdown icon"></i>
                  <span>Utilities</span>
                  <span className="ui right floated header">{`$ ${utility} / mo`}</span>
               </div>
               <div className={`${utilityActive} content`}>
                  <div className="ui checkbox">
                     <input type="checkbox" onClick={(e) => this.onChecked(e)}/>
                     <label>Include utilities in payment</label>
                  </div>
                  <div className="ui form">
                     <div className="fields">
                        <div className="field">
                           <label>Water/Sewer</label>
                           <div className="ui right labeled input">
                              <label className="ui label">$</label>
                              <input type="float" value={this.state.water} onChange={(e) => this.waterchange(e)} />
                              <div className="ui basic label">/mo</div>
                           </div>
                        </div>
                        <div className="field">
                           <label>Gas</label>
                           <div className="ui right labeled input">
                              <label className="ui label">$</label>
                              <input type="float" value={this.state.gas} onChange={(e) => this.gaschange(e)} />
                              <div className="ui basic label">/mo</div>
                           </div>
                        </div>
                     </div>
                     <div className="fields">
                        <div className="field">
                           <label>Internet</label>
                           <div className="ui right labeled input">
                              <label className="ui label">$</label>
                              <input type="float" value={this.state.internet} onChange={(e) => this.internetchange(e)} />
                              <div className="ui basic label">/mo</div>
                           </div>
                        </div>
                        <div className="field">
                           <label>Electric</label>
                           <div className="ui right labeled input">
                              <label className="ui label">$</label>
                              <input type="float" value={this.state.electric} onChange={(e) => this.electricchange(e)} />
                              <div className="ui basic label">/mo</div>
                           </div>
                        </div>
                     </div>
                  </div>

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