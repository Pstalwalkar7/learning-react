import Expenses from "./components/Expenses";

function App() {

  const expenses = [
    {
      "id": 1,
      "date": new Date(2023, 1, 24),
      "title": "Chess Tournament",
      "amount": 650
    },
    {
      "id": 2,
      "date": new Date(2023, 1, 20),
      "title": "Zerodha - HDFC Share",
      "amount": 8000
    },
    {
      "id": 3,
      "date": new Date(2022, 10, 15),
      "title": "Swiggy",
      "amount": 500
    },
    {
      "id": 4, 
      "date": new Date(2023, 1, 21),
      "title": "Mutual Funds SIP",
      "amount": 30000
    }
  ];

  return (
    <div>
      <h1 align="center">Expenses Tracker App</h1>
      <Expenses listExpenses = {expenses}/>
    </div>
  );
}

export default App;
