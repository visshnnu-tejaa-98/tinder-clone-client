import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
	return (
		<div className='app'>
			{/*header */}
			<Header />
			{/*cards */}
			<TinderCards />
			{/* swipe buttons */}
			<SwipeButtons />
		</div>
	);
}

export default App;
