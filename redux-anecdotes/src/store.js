
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from './reducers/anecdoteReducer'
import textReducer from './reducers/textReducer.js'
import filterReducer from './reducers/filterReducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import anecdoteService from './services/anecdotes'

const doubleReducer = combineReducers({
    anecdotes: reducer,
    notification: textReducer,
    filterString: filterReducer
})

const store = createStore(
    doubleReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

anecdoteService.getAll().then(notes =>
    notes.forEach( note => {
        store.dispatch({type:'NEW_ANECDOTE', data: note})
    }))

export default store