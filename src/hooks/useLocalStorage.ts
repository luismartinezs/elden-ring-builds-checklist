import { useState } from "react";

export const useLocalStorage = <T extends Record<string, unknown>>(keyName: string, defaultValue: T): [T, (newValue: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = localStorage.getItem(keyName);

      if (value) {
        const storageValue = JSON.parse(value) as T;

        // use this to make sure our lists have not updated the amount of requirements
        if (
          typeof defaultValue === "object" &&
          typeof storageValue === "object" &&
          defaultValue !== null &&
          storageValue !== null
        ) {
          const defaultKeys = Object.keys(defaultValue);
          const storageKeys = Object.keys(storageValue);
          if (
            defaultKeys.length === storageKeys.length
          ) {
            return storageValue;
          } else if (defaultKeys.length > storageKeys.length) {
            // if objects have a property with the same name, then the right-most object property overwrites the previous one.
            const combinedWithNewEntries: T = { ...defaultValue, ...storageValue };
            localStorage.setItem(
              keyName,
              JSON.stringify(combinedWithNewEntries)
            );

            return combinedWithNewEntries;
          } else {
            const defaultValueCopy: Record<string, unknown> = { ...defaultValue };
            // move the values of the storageValue into the defaultValue.
            // so we keep the correct amount of keys and the previously saved values.
            Object.keys(storageValue).forEach(function (key) {
              if (key in defaultValueCopy) {
                defaultValueCopy[key] = (storageValue as Record<string, unknown>)[key];
              }
            });
            localStorage.setItem(keyName, JSON.stringify(defaultValue));

            return defaultValue;
          }
        } else {
          return storageValue;
        }
      }

      localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) { }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};