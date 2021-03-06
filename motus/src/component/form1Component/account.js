import React, {Component} from 'react';
import { handleOnChange } from './handlingEvent';
import {connect} from 'react-redux';
import companyAction from './Action/companyAction';

class Account extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {companyAction} = this.props;
        const { industry , accountManager , date} = this.props.company;
        return(
            <div className="account">
                <h2>Account Information</h2>
                <label>
                    Industry
                </label>
                <select name="industry" value={industry} onChange={(event)=>handleOnChange(event,companyAction)}>
                    <option value="">Select</option>
                    <option value="ParleG"> ParleG</option>
                    <option value="BMW">BMW</option>
                    <option value="patanjali">Patanjali</option>
                </select>
                <h2>Account Manager</h2>
                <select name="accountManager" value={accountManager} onChange={(event)=>handleOnChange(event,companyAction)}>
                    <option value="">Select</option>
                    <option value="a1"> ParleG</option>
                    <option value="BMWa2">BMW</option>
                    <option value="patanjalia3">Patanjali</option>
                </select>
                <label>
                    Start Date
                </label>
                <input type="date" name="date" value={date} onChange={(event)=>handleOnChange(event,companyAction)}/>
                
            </div>

        )
    }

}
const mapStateToProps=(store)=>{
    return {
        company:store.form1rootReducers.form1companyReducer
    }
}
const mapDispatchToProps = {
    companyAction
}


export default connect(mapStateToProps,mapDispatchToProps)(Account);