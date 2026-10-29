import { Children, use, useContext } from "react"
import { UserContext } from "./main"
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import ChangeTheme from "./components/ChangeTheme";

function Grandchild() {
  // const value = useContext(UserContext); {RV 18 or older}
  const value = use(UserContext); {/*RV 19 or latest*/}
  console.log(value);
  return (
    <div style={{backgroundColor:"green", padding:"20px"}}>
      <h1>GrandChild - {value}</h1>
    </div>
  )
}
function Child() {
  return (
    <div style={{backgroundColor:"brown", padding:"20px"}}>
      <h1>child</h1>
      <Grandchild />
    </div>
  )
}
function Parent() {
  return (
    <div style={{backgroundColor:"blue", padding:"20px"}}>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}

function App() {
  return (
    <div style={{backgroundColor:"purple", padding:"20px"}}>
      <Navbar />
    </div>
  )
}

export default App