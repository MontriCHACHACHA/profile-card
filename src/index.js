import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  
  return (
    <>
      <div className='card'>
        <Avatar/>
        <div className='data'>
        <Intro/>
        <Skilllist/>
        </div>
      </div>
    </>
  );
}

function Avatar() {
  return <img className='avatar' src='small.jpg' alt='My Avatar'/>;
}

function Skilllist(){
  return(
    <div className='skill-list'>
      <Skill skill="Mysql" emoji="😨" color="cyan"/>
      <Skill skill="Html" emoji="😴" color="orange"/>
      <Skill skill="Css" emoji="🤮" color="yellow"/>
      <Skill skill="React" emoji="😱" color="orangered"/>
    </div>
  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายมนตรี ชะนวนกลาง</h1>
      <p>
        นักศึกษา คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศเพื่อการสื่อสาร
        มหาวิทยาลัยอุบลราชธานี งานอดิเรกชอบเล่นเกม อ่านการ์ตูน นอน
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

