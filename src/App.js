import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';


function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/appointment' element={<Appointment />} />
			</Routes>
		</div>
	);
}

export default App;
