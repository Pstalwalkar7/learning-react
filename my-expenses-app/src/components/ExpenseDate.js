import './ExpenseDate.css'

function ExpenseDate(props){
     
    const dd = props.date.getDate();
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{dd}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}

export default ExpenseDate;