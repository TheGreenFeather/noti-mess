import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => {
          axios.post('https://api-psw-notification.onrender.com/api/email-notify', {
              text: 'i hope this works',
              from: 'cogiao <cogiaolmao@bruhschool.edu.vn>',
              to: 'user <nguyenvuong17102008@gmail.com>',
              subject: 'testing emailjs'
          }, {
            headers: {
              orgin: 'http://localhost:5173',
              request: 'https://api-psw-notification.onrender.com/api/email-notify',
            },
          })
          .then(function (response) {
            console.log(response);
            Notification.requestPermission().then(function (result) {
              if (result !== 'granted') {
                return;
              }
            });
          })
          .catch(function (error) {
            console.log(error);
          });
        }}>Notify</button>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
