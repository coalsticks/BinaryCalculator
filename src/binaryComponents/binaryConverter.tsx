import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import {
  binaryToDecimal,
  convertToBinary,
  isValidBinaryInput,
  isValidDecimalNumber,
} from "../functions";
import { InputSelection } from "./InputSelection";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { VariableIcon } from "@heroicons/react/24/outline";

export const BinaryConverter = () => {
  // STATES
  const [isInitialState, setInitialState] = useState(true);
  const [result, setResult] = useState(null as null | number | string);
  const [invalidBinaryError, setInvalidBinaryError] = useState(false);
  const [invalidDecimalError, setInvalidDecimalError] = useState(false);

  //  REFERENCES
  const binaryRef = useRef<HTMLInputElement>(null);
  const decimalRef = useRef<HTMLInputElement>(null);

  //  INPUT FUNCTIONS
  const binaryInput = (active: boolean) => {
    return (
      <InputSelection
        InvalidInputerror={invalidBinaryError}
        SvgIcon={CommandLineIcon}
        active={active}
        result={result}
        reference={binaryRef}
        errorMessage={["Oh no!", "Binary values only o.o"]}
        label="Binary"
        placeholder="10010010"
      />
    );
  };

  const decimalInput = (active: boolean) => {
    return (
      <InputSelection
        InvalidInputerror={invalidDecimalError}
        SvgIcon={VariableIcon}
        active={active}
        result={result}
        reference={decimalRef}
        errorMessage={["Oh no!", "Decimal values only o.o"]}
        label="Decimal"
        placeholder="12345678"
      />
    );
  };

  // CONVERSION AND SWAP FUNCTIONS

  const handleConversion = () => {
    if (isInitialState) {
      console.log("Brow");
      if (binaryRef.current) {
        if (isValidBinaryInput(binaryRef.current.value)) {
          setInvalidBinaryError(false);
          setResult(binaryToDecimal(binaryRef.current.value));
        } else {
          setInvalidBinaryError(true);
        }
      }
    } else {
      if (decimalRef.current) {
        if (isValidDecimalNumber(decimalRef.current.value)) {
          setInvalidDecimalError(false);
          setResult(convertToBinary(parseInt(decimalRef.current.value)));
        } else {
          setInvalidDecimalError(true);
        }
      }
    }
  };

  const handleSwap = () => {
    setInvalidBinaryError(false);
    setInvalidDecimalError(false);
    setResult(null);
    setInitialState((prev) => !prev);
  };

  return (
    <div className=" ">
      {isInitialState ? binaryInput(true) : decimalInput(true)}
      <div className="flex justify-center items-center w-full">
        <button
          onClick={() => handleSwap()}
          type="button"
          className="text-white bg-violet-500 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <ArrowPathIcon className="h-4 w-4" />
          <span className="sr-only">Icon description</span>
        </button>
      </div>
      {!isInitialState ? binaryInput(false) : decimalInput(false)}

      <div className="flex justify-end">
        <button
          onClick={() => handleConversion()}
          type="button"
          className=" text-white bg-rose-400 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Convert
        </button>
      </div>
    </div>
  );
};
