import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AppBar from './Components/AppBar';
import List from './Components/List';
import Add from './Components/Add';
import EditModal from './Components/EditModal';

const arr = [

  {
    id: 0,
    task: "Workshop @ 10am"
  },
  {
    id: 1,
    task: "Complete registration"
  },
  {
    id: 2,
    task: "Attend seminar function"
  }

]

function App() {
  //creating state in react
  const [list, setList] = useState(arr)
  const [value, setValue] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [inUpdation, setInUpdation] = useState({})

  // this trigger on new task button is clicked
  const handleAddClick = () => {
    setList([...list, {
      id: list.length,
      task: value
    }])

    setValue("")
  }

  // this is triggered when there is new task input getting added
  const onInputChange = (text) => {
    setValue(text)
  }

  const onDelete = (id) => {
    setList(list.filter(e => e.id !== id))
  }

  const onEdit = (id) => {
    setInUpdation(list.filter(e => e.id === id)[0])
    setIsOpen(true)
  }

  const onUpdateInputvalue = (text) => {
    setInUpdation({ ...inUpdation, task: text })
  }

  const onUpdate = () => {
    const temp = []

    list.forEach((ele) => {
      if (ele.id === inUpdation.id) {
        ele.task = inUpdation.task
      }
      temp.push(ele)
    })

    setList([...temp])
    setInUpdation({})
    setIsOpen(false)
  }

  const onModalClose = () => {
    setIsOpen(false)
    setInUpdation({})
  }
  return (
    <div className='root'>
      <div className='todo-root'>
        <AppBar />
        {/* Passing list prop to the List component */}
        <List onEdit={onEdit} onDelete={onDelete} items={list} />
        <Add value={value} change={onInputChange} click={handleAddClick} />
        <EditModal onClose={onModalClose} onSubmit={onUpdate} change={onUpdateInputvalue} value={inUpdation?.task} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default App;
