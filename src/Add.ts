export default function Add(
  numberString: string,
  delimeter: string = ","
): number | void {
  let numberArray = numberString.split(delimeter);
  let negativeNumberArray = numberArray.filter((val) => Number(val) < 0);
  if (negativeNumberArray.length > 0) {
    throw new Error("negative numbers not allowed");
  }
  let output = numberArray.reduce((total, val) => {
    return total + Number(val);
  }, 0);
  return output;
}
