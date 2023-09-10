import React from "react";
import ReactDOM  from "react-dom/client";

import "./index.css"
import pizzaData from "./data.js"

function App() {
    return <>
            < Header />
            < Menu />
            < Footer />
           </>
}

function Header(){
    /**
     * Component No.1 the header of the page  
    */
    
    // styles can be used as below too but having a common CSS file
    // like ./index.css is the right way 
    // const style = {color: "Red", fontSize: "48px", textTransform: "uppercase"}
    const style = {}

    return (
        <header className="header">
            <h1 style={style}>
                Fast React Pizza Co.
            </h1>
        </header>
    )
}

function Menu() {
    /**
     * This a main function and is resoposible for rendering the 
     * Menu and it's sub-component i.e Pizza
     * Here u can see the use of turnery operator there are multiple ways to return a JSX
     */
    const pizzas = pizzaData;
    // const pizzas = []
    const numPizza = pizzas.length

    let render = ""
    if (numPizza > 0) {
        render = <>
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
    } else {
        render =  <p>We're still working on our menu. Please come back Later :)</p>
    }

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {render}
        </main>
    )
}

// ! without deconstrinting the props
// function Pizza(props){
function Pizza({ pizzaObj }){
    /**
     * Following is a sub component called by Menu Function
     * Here can see the turnary operator use 
     * * how a procs aka properties is deconstructed and passed as input of the function
     * * this is super useful when it comes to readablity of the code.
     */
    // console.log(pizzaObj)
    
    // ! deconstrinting the props in the code
    // const pizzaObj = props.pizzaObj

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + ".00 $"}</span>
            </div>

        </li>
    );
}

function Footer(){
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour
    
    console.log(`isOpen = ${isOpen}`)
    let msg = ""

    if (isOpen){
        msg = <Order closeHour={closeHour} openHour={openHour}/>
    } else {
        msg = <p>
                We're happy to welcome you between {openHour}:00 and {closeHour}:00.
             </p>
    }

    return (
        <footer className="footer">
            {msg}
        </footer>
    )
}

function Order({ openHour, closeHour }){
    /**
     * this is a sub function called by Footer 
     * And here the input props are deconstructed 
     */
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order 
                online.
            </p>
            <button className="btn">Order</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    )