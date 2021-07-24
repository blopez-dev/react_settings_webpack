import ReactDOM from 'react-dom';
import User from './components/user';
import Title from './components/title';
import './index.css';

const Application = () => (
  <main>
      <Title />
      <User />
  </main>
);

const body = document.querySelector('#root');
ReactDOM.render(<Application />, body);
