import ReactDOM from 'react-dom';
import App from './app';

const isDevelopment = process.env.NODE_ENV === 'development';

if(isDevelopment) {
  const body = document.querySelector('#root');
  ReactDOM.render(<App />, body);
}

export default App;
