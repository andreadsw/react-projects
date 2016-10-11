/*
Understanding about actions

- Actions change our state. Actions have trigged type of action and data(props).

- Action creator is a function returns an action (object). That object is sent to
all of reducers inside of the application. Actions will flow all those reducers.

- Reducers can choose (switch/case) which piece of state should be returned.

- Returned piece of state piped into the application state and the application
state pumped up to the react application which makes all our components to
re-render

*/
