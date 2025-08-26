import MyButton from "./MyButton";
import Hello from "./Hello";
import Random from"./Random";


/*import the default exported component MyButton from MyButton.jsx file*/

//Functional Component
function App() {
  return <div>
    <h1>
    Hello World!
    </h1>
    <MyButton></MyButton>
    <Hello></Hello>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
</div>
}

export default App; 

/* it is a React (actually JavaScript ES6) feature used for exporting a component (or any value) from a file so you can import it somewhere else.*/
/*ES6: ES6 means ECMAScript 6, also called ECMAScript 2015.
It’s just a new version of JavaScript that added many cool and modern features to make coding easier.*/
