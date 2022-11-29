import { CommandLineIcon } from "@heroicons/react/24/outline";

export const InputSelection = ({
  active,
  reference,
  result,
  InvalidInputerror,
  SvgIcon,
  label,
  errorMessage,
  placeholder,
}: {
  active: boolean;
  reference: React.RefObject<HTMLInputElement>;
  result: null | string | number;
  InvalidInputerror: boolean;
  SvgIcon: (
    props: React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
  label: string;
  errorMessage: [string, string];
  placeholder: string;
}) => {
  return (
    <>
      <label
        htmlFor="input-group-1"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="relative mb-6">
        {active ? (
          <>
            <div className="flex flex-col items-center h-full justify-center">
              <div className="absolute  h-full left-0 flex items-center pl-3 pointer-events-none">
                <SvgIcon
                  className={`w-5 h-5 ${
                    InvalidInputerror
                      ? "stroke-red-500"
                      : result && !active
                      ? "stroke-green-900"
                      : "stroke-gray-400"
                  }`}
                />
              </div>
              <input
                ref={reference}
                type="text"
                id="input-group-1"
                className={`${
                  !InvalidInputerror
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-red-50 border-red-500 text-red-900"
                } border   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="10010010"
              />
            </div>

            {InvalidInputerror && (
              <p className="pt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{errorMessage[0]} </span>
                {errorMessage[1]}
              </p>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center h-full justify-center">
            <div className="absolute  h-full left-0 flex items-center pl-3 pointer-events-none">
              <SvgIcon
                className={`w-5 h-5 ${
                  result && !active ? "stroke-green-900" : "stroke-gray-400"
                }`}
              />
            </div>
            <input
              type="text"
              id="input-group-1"
              className={`${
                !result
                  ? "bg-gray-200 border-gray-300 text-gray-900"
                  : "bg-green-50  border-green-500 text-green-900 placeholder:text-green-900"
              } border   text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder={result ? result.toString() : placeholder}
              disabled
            />
          </div>
        )}
      </div>
    </>
  );
};
