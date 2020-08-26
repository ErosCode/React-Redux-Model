  
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Counter from '../components/Counter/Counter';

// Action Creators
import { increment, decrement } from '../actions/counter';

/* === State (données) ===
 * - mapStateToProps return a props object for the component
 * - mapStateToProps got 2 params
 *  - state : store state (getState)
 *  - ownProps : container props
 * You have nothing to put in mapStateToProps? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  count: state.counter.value,
});

/* === Actions ===
 * - mapDispatchToProps return a props object for the component
 * - mapDispatchToProps got 2 params
 *  - dispatch : store function to dispatch an action
 *  - ownProps : container props
 * You have nothing to put in mapDispatchToProps? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
});

// You can also export in 1 line like this : export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Container
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

// == Export
export default CounterContainer;