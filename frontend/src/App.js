import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
// Components
import Navbar from './components/Navbar';
function App() {
	const [sideToggle, setSideToggle] = useState(false);
	return (
		<BrowserRouter>
			<Navbar click={() => setSideToggle(true) }/>
			<SideDrawer show={sideToggle}/>
			<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
			<main>
				<Switch>
					<Route exact path='/' component={HomeScreen} />
					<Route exact path='/product/:id' component={ProductScreen} />
					<Route exact path='/cart' component={CartScreen} />
				</Switch>
			</main>
			{/* HomeScreen */}
			{/* ProductScreen */}
			{/* CartScreen */}
		</BrowserRouter>
  );
}

export default App;
