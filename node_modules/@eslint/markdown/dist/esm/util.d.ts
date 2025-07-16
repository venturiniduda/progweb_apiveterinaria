/**
 * Finds the line and column offsets for a given offset in a string.
 * @param {string} text The text to search.
 * @param {number} offset The offset to find.
 * @returns {{lineOffset:number,columnOffset:number}} The location of the offset.
 *      Note that `columnOffset` should be used as an offset to the column number
 *      of the given text in the source code only when `lineOffset` is 0.
 *      Otherwise, it should be used as a 0-based column number in the source code.
 */
export function findOffsets(text: string, offset: number): {
    lineOffset: number;
    columnOffset: number;
};
/**
 * @fileoverview Utility Library
 * @author Nicholas C. Zakas
 */
export const illegalShorthandTailPattern: RegExp;
