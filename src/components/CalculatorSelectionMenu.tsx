import { useState } from "react";
import { Tab } from "@headlessui/react";
import { BinaryConverter } from "../binaryComponents/binaryConverter";
import { BinaryAdddition } from "../binaryComponents/BinaryAddition";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CalculatorSelectionMenu() {
  let [categories] = useState({
    "Binary Converter": <BinaryConverter />,
    // "Binary Addition": <BinaryAdddition />,
    // "2's Complement": [
    // ],
  });

  return (
    <div className="w-full max-w-xl px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "focus:outline-none ",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((component, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "focus:outline-none "
              )}
            >
              {/*TAB CONTENT  */}
              <div>{component}</div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
