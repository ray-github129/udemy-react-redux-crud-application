// reducerでも使うので使い回しのためexportしておく
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const incriment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => {
    return {
     type:'DECREMENT'
    } 
}