// reducerでも使うので使い回しのためexportしておく
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => {
    return {
     type:'DECREMENT'
    } 
}