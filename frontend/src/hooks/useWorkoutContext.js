import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)

    if (!context) {
        throw Error('useWorkoutContext must be used within a AuthContextProvider')
    }
    
    return context
}