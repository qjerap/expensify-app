import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';





const ExpensesSummary = (props) => (

        <div>
            {props.expenseCount.length > 0 && <h1>
                Viewing {props.expenseCount.length} {props.expenseCount.length > 1 ? <span>expenses</span> : <span>expense</span>} <span>totalling</span> {numeral(expensesTotal(props.expenseCount) / 100).format('0,0[.]00 $')}</h1>}        
        </div>

    );


const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters),
        
    }
}

export default connect(mapStateToProps)(ExpensesSummary);