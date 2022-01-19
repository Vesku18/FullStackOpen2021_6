import React, {useEffect} from 'react'
import {useDispatch} from  'react-redux'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import noteService from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    noteService.getAll().then(n => dispatch(initializeAnecdotes(n)))
    } , []
  )
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList/>
      <AnecdoteForm/>
      <Notification/>
    </div>
  )
}



export default App