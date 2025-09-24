import React, { useState } from "react";

const useToggleCustomHook = (defaultVal) => {
  const [value, setValue] = useState(defaultVal);
  function toggleValue(val) {
    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }
  return [value, toggleValue];
};

export default useToggleCustomHook;
