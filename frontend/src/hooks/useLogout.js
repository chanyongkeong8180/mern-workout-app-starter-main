import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutContext";
export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch: workoutDispatch} = useWorkoutContext();
    const logout = () => {
        // Remove user from storage
        localStorage.removeItem('user')

        // Dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutDispatch({type: 'SET_WORKOUTS', payload: null})
    }
    return {logout}
}