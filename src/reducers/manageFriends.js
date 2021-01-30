export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            let obj = Object.assign({}, state)
            obj.friends.push(action.friend)
            return obj
        case 'REMOVE_FRIEND':
            let object = Object.assign({}, state)
            object.friends.map((friend, index) => {
                if (friend.id === action.id) {
                    object = {
                        ...state,
                        friends: [
                            ...state.friends.slice(0, index),
                            ...state.friends.slice(index + 1)
                        ]
                    }
                }
            })
        return object
        default:
            return state;
    } 
}
