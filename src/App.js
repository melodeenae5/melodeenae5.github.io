import './App.css';
import Pdf from './resume/danae_kirby_resume.pdf';

function App() {
	return (
		<div className='App'>
			Hello world!
			<a href={Pdf} target='_blank'>
				Resume
			</a>
		</div>
	);
}

export default App;
