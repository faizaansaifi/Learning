import React, {Component} from 'react';
import companyAction from './Action/companyAction';
import { handleOnChange } from './handlingEvent';
import {connect} from 'react-redux';

class Country extends Component{

    render(){
        const {companyAction} = this.props;
        const { BillingAddress1 , BillingAddress2 , city , PhoneNumber} = this.props.company;
        return(
            <div className="contact">
                <h2>Country</h2>
                <label>Country</label>
                <select name="countryName" onChange={(event)=>handleOnChange(event,companyAction)}>
                    <option value="">Select</option>
                    <option value="US"> United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Europe">Europe</option>
                </select>
                <div className="billing">
                    <label>Billing Address Line 1</label>
                    <input type="text" name="BillingAddress1" value={BillingAddress1} onChange={(event)=>handleOnChange(event,companyAction)} placeholder="Street Address, PO, Box"/>
                    <label>Billing Address Line 2</label>
                    <input type="text" name="BillingAddress2" value={BillingAddress2}  onChange={(event)=>handleOnChange(event,companyAction)} placeholder="Building Suite, Floor etc"/>
                    <label>City</label>
                    <input type="text" name="city" name="city" value={city}  onChange={(event)=>handleOnChange(event,companyAction)}/>
                    <label>Phone Number</label>
                    <input type="text" maxLength="10" name="PhoneNumber" value={PhoneNumber} onChange={(event)=>handleOnChange(event,companyAction)}/>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (store) => {
    return {
        company:store.form1rootReducers.form1companyReducer
    };
}

const mapDispatchToProps = {
    companyAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Country);