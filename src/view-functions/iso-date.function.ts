
/**
 * Converts a Date to an ISO date, without time
 *
 * @author Kevin Guanche Darias <kevin@kevinguanchedarias.com>
 * @export
 * @param {Date} input
 * @returns {string}
 */
export function isoDate(input: Date): string {
    return input.toISOString().slice(0, 10);
}
