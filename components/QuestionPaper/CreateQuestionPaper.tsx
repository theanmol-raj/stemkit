"use client";

import { CreatePaper } from "@/providers/QuestionPaper/Create";
import React, { useContext, useState } from "react";

interface DropdownOption {
  value: string | null;
  label: string;
}

const data = [
  {
    step: false,
    default: "-Select-",
    label: "board",
    options: ["-Select-", "CBSE", "ICSE"],
  },
  {
    step: false,
    default: "-Select-",
    label: "grade",
    options: ["-Select-", ...new Array(6).fill("a")],
  },
  {
    step: false,
    default: "-Select-",
    label: "subject",
    options: ["-Select-", "Maths"],
  },
  {
    step: false,
    default: "-Select-",
    label: "chapter-all",
    options: ["-Select-", "Chapter-all"],
  },
  {
    step: false,
    default: "-Select-",
    label: "topic",
    options: ["-Select-", "Topic-all"],
  },
  {
    step: false,
    default: "-Select-",
    label: "subtopic",
    options: ["-Select-", "Subtopic-all"],
  },
  {
    step: false,
    default: "-Select-",
    label: "difficulty",
    options: ["-Select-", "Difficulty-all"],
  },
];

const MultiDropdown = () => {
  const [selections, setSelections] = useState<typeof data>(data);

  const {setShow} = useContext(CreatePaper)

  const handleChange = (index: number, value: any) => {
    setSelections((prevSelections) => [
      ...(prevSelections || []).slice(0, index),
      { ...prevSelections[index], default: value, step: true },
      ...(prevSelections || []).slice(index + 1),
    ]);
  };

  const isActive =
    selections?.every(
      (selection) => selection.step && selection.default !== "-Select-"
    ) ?? false;

    // console.log(setShow)

  return (
    <div className=" px-5 py-3 flex items-end gap-3 bg-white mt-4 rounded-md flex-wrap lg:flex-nowrap max-h-max">
      {selections.map((item, index) => (
        <div className="w-full md:max-w-96 xl:max-w-xs " key={index}>
            <p className=" text-xs/3 capitalize pl-2 pb-2 ">{item.label}</p>
          <select
            className=" w-full border p-1 rounded"
            value={item?.default}
            onChange={(e) => handleChange(index, e.target.value)}
          >
            {item?.options.map((x: string, y: number) => (
              <option key={y} value={x}>
                {x}
              </option>
            ))}
            {/* <option value="option2">Option 2</option> */}
          </select>
        </div>
      ))}
      <button
        className=" w-full md:max-w-96 xl:max-w-xs py-1
        5 max-h-12 rounded bg-indigo-500 text-white disabled:bg-gray-300 "
        disabled={!isActive}
        onClick={()=> setShow(true)}
      >
        Submit
      </button>
    </div>
  );
};

export default MultiDropdown;
