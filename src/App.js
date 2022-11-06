import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/About/About';
import Review from './Pages/Review/Review';


function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/review' element={<Review />} />
				<Route path='/appointment' element={<Appointment />} />
			</Routes>
		</div>
	);
}

export default App;
