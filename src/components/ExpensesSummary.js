import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';





const ExpensesSummary = (props) => (
        <div>
            {props.expenseCount.length > 0 && <p>
                {`Viewing 
                ${props.expenseCount.length} 
                expenses totalling 
                ${numeral(expensesTotal(props.expenseCount) / 100).format('0,0[.]00 $')}`}</p>}        
        </div>

    );




const mapStateToProps = (state) => {
    return {
        expenseCount: state.expenses
    }
}

export default connect(mapStateToProps)(ExpensesSummary);