import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props){
    
    const expenses = [];
    let i = 0;
    props.listExpenses.forEach(expense => {
        expenses.push(<ExpenseItem key={i++} date={expense.date} title={expense.title} amount={expense.amount}/>)
    })
    
    return <div className="expenses">
        {expenses}
    </div>;


}

export default Expenses;