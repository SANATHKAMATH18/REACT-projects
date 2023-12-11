React way of creating event listeners 
onClick = {function}
************************************************************************************************
pass state as a call back function not when u want to change it based on current value of the state to be safe

When u want to change state not based on 
current value of the state pass it directly 

************************************************************************


Some tips 
One component one State 
Each component manages its own state and only affects its own state 

UI=f(state)
 Reaact application is changing the state over time which contribute to its declarative ,revisited approach
 *********************************************************************
 
 use a state variable for any data thta component should keep track of over time.
 
 whenever you want something to be dynamic create a State
 example is open in the given example
 
 if you want to change the way a component looks like or the data its displyas update its state,this usually happens in the event handler function .
 
 when building a component imagine ots view as a reflection of state changing over time
 
 for data that do not trigger component rerenders , dont use state .Use regular varialbe instead . This is a common beginner mistake