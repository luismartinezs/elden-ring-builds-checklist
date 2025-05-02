import React, { useState, useEffect } from "react";
import { type TStatKey, statColorMap } from "./stats";
import { cn } from "~/utils/cn";

interface StatInputProps {
  label: string;
  statKey: TStatKey;
  initialValue?: number;
  onChange?: (value: number) => void;
}

export const StatInput: React.FC<StatInputProps> = ({
  label,
  statKey,
  initialValue = 1,
  onChange,
}) => {
  const MIN_VALUE = 1;
  const MAX_VALUE = 99;
  const STEP = 1;

  const [value, setValue] = useState<number>(() => {
    const validInitialValue =
      initialValue >= MIN_VALUE && initialValue <= MAX_VALUE
        ? initialValue
        : MIN_VALUE;
    return validInitialValue;
  });

  useEffect(() => {
    if (initialValue !== undefined) {
      const validInitialValue = Math.max(
        MIN_VALUE,
        Math.min(MAX_VALUE, initialValue)
      );
      setValue(validInitialValue);
    }
  }, [initialValue, MIN_VALUE, MAX_VALUE]);

  const handleValueChange = (newValue: number) => {
    const clampedValue = Math.max(MIN_VALUE, Math.min(MAX_VALUE, newValue));
    // Ensure the value is an integer if needed, though type="number" often handles this.
    // clampedValue = Math.floor(clampedValue); // Uncomment if non-integer inputs are possible and undesirable

    setValue(clampedValue);
    if (onChange) {
      onChange(clampedValue);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    // Handle cases where input might be empty or NaN temporarily
    if (!isNaN(newValue)) {
      handleValueChange(newValue);
    } else if (event.target.value === "") {
      // Allow clearing the input temporarily, might need a strategy
      // if empty means reset to min or just invalid state until typed
      // For now, let's reset to min if cleared, or handle based on UX preference
      // setValue(MIN_VALUE); // Or handle differently
      // Or maybe just keep the current state until a valid number is entered
    }
  };

  const increment = () => {
    handleValueChange(value + STEP);
  };

  const decrement = () => {
    handleValueChange(value - STEP);
  };

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="mb-1 flex items-center">
        <div
          className={cn(
            "mr-1.5 h-2.5 w-2.5 rounded-full md:mr-2 md:h-3 md:w-3",
            statColorMap[statKey]
          )}
        ></div>
        <label className="text-xs uppercase text-stone-300 md:text-sm">
          {label}
        </label>
      </div>
      <div className="flex items-stretch">
        <button
          onClick={decrement}
          disabled={value <= MIN_VALUE}
          className="bg-stone-700 px-2 py-0.5 text-sm text-white hover:bg-stone-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-3 md:py-1 md:text-base"
        >
          -
        </button>
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          min={MIN_VALUE}
          max={MAX_VALUE}
          step={STEP}
          className="w-14 border border-stone-700 bg-stone-800 p-1.5 text-center text-xl text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 md:w-16 md:p-2 md:text-2xl"
        />
        <button
          onClick={increment}
          disabled={value >= MAX_VALUE}
          className="bg-stone-700 px-2 py-0.5 text-sm text-white hover:bg-stone-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-3 md:py-1 md:text-base"
        >
          +
        </button>
      </div>
    </div>
  );
};
