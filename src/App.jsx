// import './App.css'
// import Table from '../src/components/Table'
import { useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import NotesList from './components/NotesList';

function App() {
  const [users, setUsers] = useState(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    usersApi()
  }, [])
  const usersApi = async () => {
    const usersList = await fetch('https://jsonplaceholder.typicode.com/todos')
    const allUsers = await usersList.json();
    // console.log("getUser", getUser.json())
    setUsers(allUsers)
  }

  // console.log("usersss", users)
  return (
    <>
      <h1>
        Hello Vite Demo
      </h1>
      <NotesList users={users} />
      <Button color='primary' onClick={() => setOpen(true)}>CLick Me</Button>
      <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader>
          Modal title
        </ModalHeader>
        <ModalBody>
          Modal body text goes here.
        </ModalBody>
      </Modal>
    </>
  )
}

export default App
