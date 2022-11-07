import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/About/About';
import Review from './Pages/Review/Review';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';


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
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
