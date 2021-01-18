
/**
 * Intended for use as a tag function of a Tagged Template String. 
 * When called as such the first argument will be a well formed template call site object 
 * and the rest parameter will contain the substitution values.
 * 
 *
 * @param template A well-formed template string call site representation.
 *
 * @param substitutions A set of substitution values.
 * 
 * @example 
 * let param = 'World';
 * const myLitTemp = html`<h1>Hello ${param}</h1>`;
 */
export const html = String.raw;

declare global {
  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and returns a unified string representation of the expected lit-temp generated results.
     * 
     * NOTE: The callback ***must*** return a lit-temp generated string:
     * ```javascript
     * <ul>
     *    ${
     *        someArray.flatten(element => {
     *          return html`<li>${element}</li>`
     *        });
     *    }
     * </ul>
     * ```
     * 
     * @param {(value: T, index: number, array: T[]) => any} fn - A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @return {string} A concatenated string of all the lit-temp generated strings produced by the callback.
     * 
     
     */
    flatten(fn: (value: T, index: number, array: T[]) => string): string;
  }
}

Array.prototype.flatten = function (fn: (value: any, index: number, array: any[]) => string) {
  var _self = this as Array<any>;
  return _self.map(fn).join('');
};