const DECIMAL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


function validateRgbHex(inputType, values) {

  // if RGB to HEX
  // length 3
  // no character
  // max value 255
  // min value 0

  // if HEX to RGB
  // length must be 6
  // must be in 0-9 or A-F
}

// rgbNums is an array
function RgbToHex(rgbNums) {
  // run the validation function
  if (validateRgbHex) {
    // Step1 - take the num and divide by 16. 
    let rgbWholeNum = rgbNums.map((num) => {
      return Math.round(num / 16);
    });
    let rgbRemainder = rgbNums.map((num) => {
      return Math.round(num / 16);
    });
  } else {
    //some error response here
  }
  // Step2 - Take the result's whole number and use as index position of the DECIMAL array to find the first value of the hex number





  // Step3 - take the remainder and multiply by 16

  // Step4 - use the result as the index position in DECIMAL Array. 

  // Step5 - repeat steps 1-4 for each rgb number.
};

function HexToRgb(hexNum) {
  // each hex value is paired with the next digit.
  // Step1 - find the value of the first hex digit in the DECIMAL array. return the index position value. 

  // Step2 -  multiply the index value by 16.

  // Step3 - take the second hex num and return its index position in the DECIMAL array. Add it to the value in step 2.

  // repeat for each pair of hex values. this creates your 3 rgb nums
}