export default function Add(numberString: string): number {
    let numberArray = numberString.split(",");
    let output = numberArray.reduce((total, val) => {
        return total + Number(val)
    }, 0)
    return output;
}