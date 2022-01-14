import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote, asObject } from '../reducers/anecdoteReducer'
import {setNote, shutNote} from '../reducers/textReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNew = async (event) =>{
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        console.log("uusi:"+ anecdote)
        const newA = await anecdoteService.createNew(asObject(anecdote))

        dispatch(createAnecdote(newA))
        dispatch(setNote('Uusi dootti luotu'))
        setTimeout(() => {dispatch(shutNote())} , 5000)
      }
    
    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addNew}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button>
        </form>
        </div>
    )
}

export default AnecdoteForm