import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('pending...')

  useEffect(() => {
    fetch('http://localhost:3000/students/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ number: '201', password: 'test123' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Token received:', data.token)
        return fetch('http://localhost:3000/students', {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        })
      })
      .then((res) => {
        console.log('Statut response:', res.status)
        return res.json()
      })
      .then((data) => {
        console.log('Student received:', data)
        setMessage(JSON.stringify(data))
      })
      .catch((err) => {
        console.error('Error:', err)
        setMessage('Error - look at your console')
      })
  }, [])
/*
useEffect(() => {
  async function loadStudents() {
    try {
      const res = await fetch('http://localhost:3000/students')
      console.log('Status response', res.status)
      const data = await res.json()
      console.log('Données reçues:', data)
      setMessage(JSON.stringify(data))
    } catch (err) {
      console.error('Error:', err)
      setMessage('Error - look at your console')
    }
  }
  loadStudents()
}, [])
*/
  return (
    <div>
      <h1>Test connexion backend</h1>
      <p>{message}</p>
    </div>
  )
}

export default App