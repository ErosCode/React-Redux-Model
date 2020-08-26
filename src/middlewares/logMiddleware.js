// Just for you to know in which state you pass your action
const logMiddleware = (store) => (next) => (action) => {
    console.log(store.getState());
    console.log('I let pass this action: ', action);
    next(action);
  };
  
  export default logMiddleware;
  