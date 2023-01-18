interface HabitsProps{
     completed: number
}


export function Habit(props:HabitsProps){
     return(
          <p>{props.completed}</p>
     )
}