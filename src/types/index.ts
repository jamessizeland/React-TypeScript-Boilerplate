/** Type Definitions */
// - always use interface for public API’s definition when authoring a library or 3rd-party ambient type definitions.
// - consider using type for your React Component Props and State, because it is more constrained.

export type exampleType = {
  /** basic number counter */
  counter: number;
  /** enter your email */
  email: string;
  /** flashing led */
  indicator: boolean;
};
