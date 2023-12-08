import React from "react";
import pizzaData from "./data";
//console.log(pizzaData)
function App() {
  return <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>;
}

function Header() {
  const style = { color:"#759248", fontSize:'32px' ,textTransform:'uppercase'};
  return (
    <header className="header">
      <h1 style= {style}> React pizza company </h1>
    </header>
  );
}
function Menu() {
  const pizzas=pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu </h2>

      {/* using and operator */}
      {/* {numPizzas > 0 && (
      <ul className="pizzas">
        {pizzas.map((pizza) => ( <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))} 
      </ul>
      )} */}
      {/* Using ternary operator adavantage we can display some alternative  */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on the menu plz come back later</p>
      )}
      {/* <Pizza name="Pizza Spinaci" ingridients ="Tomato , mozarella,spinach,and ricotta cheese"
      photoname="pizzas/spinaci.jpg"
      price={10}  
      /> */}
      {/* <Pizza name="Pizza Fungi" ingridients="tomato mushrooms"
      price={12}
      photoname='pizzas/funghi.jpg' />
      <Pizza name={pizzaData[1].name}
        ingridients={pizzaData[1].ingridients}
        price={pizzaData[1].price}
        photoname={pizzaData[1].photoname}
      />
      <Pizza name={pizzaData[4].name}
        ingridients={pizzaData[4].ingridients}
        price={pizzaData[4].price}
        photoname= "pizzas/focaccia.jpg" */}
      {/* /> */}
    </main>
  );
}
function Pizza({pizzaObj}) {
  //console.log(props.pizzaObj);
  // if(pizzaObj.soldOut)
  // {
  // return null;
  // }
  return (
    <li className={`pizza ${pizzaObj.soldOut? "sold-out":null}`}>
      <img src={pizzaObj.photoName} alt="spinacci"></img>
      <div>  
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "Sold Out":pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
 // console.log(isopen);
//   if(hour >= openhour && openhour<= closehour)
//   alert('We are currently open')
// else
//   alert('We are currently closed')
  return(
    <footer className="footer">
    {
      isopen ? (<Order closedHour={closehour}/>):<p>We are ready to welcome you between {openhour}:00 and {closehour}:00 </p>
    }
    </footer>
  )
  function Order(props)
  {
    return(
      <div className="order">  
      <p>We are currently open, Come visit us or order online 
      </p>
      <button className="btn">
        Order
      </button> 
      </div>
      );
  } 
  //(React.createElement('footer',null,"We are currently open "));
  
}
export default App;