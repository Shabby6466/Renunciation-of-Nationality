import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-[397px] h-[48px] border border-gray-300 rounded-lg px-3 py-2 text-sm  text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#525EB1] focus:border-transparent",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
