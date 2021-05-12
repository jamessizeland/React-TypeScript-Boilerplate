// https://reactjs.org/docs/context.html
/*
  Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

  Using context, we can avoid passing props through intermediate elements

  Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
*/

import { createContext, Provider } from 'react';
import reducer from '../reducers/UseReducerExample';
import { exampleType } from '../types';

export const exampleContext = createContext<exampleType>({
  counter: Math.random(),
  email: 'example@context.com',
  indicator: Math.random() > 0.5,
});

exampleContext.displayName = 'custom text used by ReactDevTools';

/*
  When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

  The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.
 */

export const ExampleProvider: Provider<exampleType> = exampleContext.Provider;

/*
  Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.

Changes are determined by comparing the new and old values using the same algorithm as Object.is.
*/
