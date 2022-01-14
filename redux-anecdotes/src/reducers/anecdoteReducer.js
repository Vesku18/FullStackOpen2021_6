
import { useDispatch } from 'react-redux'
import {shutNote, setNote} from './textReducer.js'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'NEW_VOTE':
      const id = action.data
      const anecdoteToVote = state.find(n => n.id === id)
      return state.map(o => o.id !== id ? o : {content: o.content, id: o.id, votes: o.votes+1})
    default: 
      return state
    }
}

export const createAnecdote = (object) => {
  return {
    type: 'NEW_ANECDOTE',
    data: object    
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'NEW_VOTE',
    data: id.toString()
  }
}


export default reducer