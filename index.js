

//----------------REDUX STORE--------------
const redux = require('redux')
const createStore = redux.createStore

//-----------ACTION----------
const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type : BUY_CAKE,
        info : 'First Redux Action'
    }
        
}

//----------REDUCER------------------
//previousState(state, action)=>newState

const initialstate = {
    numOfCakes: 20
}

const reducer = (state = initialstate, action) => {

    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        default: return state
    }

}

//----------------REDUX STORE--------------
const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsbicribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsbicribe()

