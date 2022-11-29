export const binaryToDecimal = (binaryNumber: string) => {
  return parseInt(binaryNumber, 2);
};

export const convertToBinary = (x: number) => {
  return Number(x).toString(2);
};

export const isValidBinaryInput = (binaryString: string) => {
  return /^([0-1]+)$/.test(binaryString);
};

export const isValidDecimalNumber = (decimalNumber: string) => {
  return /^(\d+)$/.test(decimalNumber);
};
