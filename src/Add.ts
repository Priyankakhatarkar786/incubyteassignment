/**
 * @description Function to add a string of numbers. negative numbers are not allowed.
 * @param numbers string
 * @param delimiter string
 * @returns 
 */
export default function add(numbers: string, delimiter: string = ","): number {
    // Split the input string into an array of numbers
    const parsedNumbers = numbers.split(delimiter).map(Number);
  
    // Find negative numbers
    const negativeNumbers = parsedNumbers.filter(num => num < 0);
  
    // Throw an error if any negative numbers are found
    if (negativeNumbers.length > 0) {
        throw new Error("negative numbers not allowed");
    }
  
    // Sum up all the numbers
    return parsedNumbers.reduce((sum, num) => sum + num, 0);
  }