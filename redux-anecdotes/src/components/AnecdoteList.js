import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNote, shutNote } from '../reducers/textReducer'
import store from '../store'
import Filter from './Filter'

const AnecdoteList = () => {

    const fildderi = useSelector(state=>state.filterString)
    const anecdotes = useSelector(state => state.anecdotes).sort((a,b) => b.votes-a.votes).filter(n=>n.content.match(fildderi))
    const anec = anecdotes.filter(n=>n.content.match(store.filterString))
    console.log("anec:", store.filterString, anec)
    
    const dispatch = useDispatch()

    const vote = (id) => {
      console.log('vote', id)
      dispatch(voteAnecdote(id))
      dispatch(setNote("Kiitos äänestä"))
      setTimeout(() => {dispatch(shutNote())} , 5000)
    }

    return(
        <div>
         <Filter/> 
        {
        anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)} >vote</button>
            </div>
          </div>
        )}
        </div>
    )
}

export default AnecdoteList