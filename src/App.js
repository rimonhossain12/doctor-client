import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/About/About';
import Review from './Pages/Review/Review';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import ContactUs from './Pages/Contact/ContactUs';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import DashBoard from './Dashboard/DashBoard';


function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/review' element={<Review />} />
				<Route path='/appointment' element={
					<RequireAuth>
						<Appointment />
					</RequireAuth>
				} />

				<Route path='/dashboard' element={<DashBoard />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/contact' element={<ContactUs />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
