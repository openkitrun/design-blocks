/**
 * A boolean constant indicating whether the current environment is a development environment.
 *
 * This constant is `true` if the `NODE_ENV` environment variable is not set to 'production',
 * and `false` otherwise. It can be used throughout the application to conditionally
 * execute or exclude code that should only run in development environments.
 *
 * For example, it's common to use `__DEV__` to include logging, debugging, or
 * other development-only features.
 *
 * @example
 *
 * if (__DEV__) {
 *   console.log("This log only appears in development environments.");
 * }
 *
 */
export const __DEV__ = process.env.NODE_ENV !== 'production';

export default __DEV__;
