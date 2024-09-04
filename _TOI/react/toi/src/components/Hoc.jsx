import React from "react";

export const Hoc = (Wrapper) => {
  return function ({ isLoading,...props }) {
    if (isLoading) {
        return <div> Loading </div>
    }
    return <Wrapper {...props} />
  };
};
