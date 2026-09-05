import { cn } from "@/lib/utils";
import { SpinnerIcon } from "@phosphor-icons/react";
function Spinner({ className, ...props }) {
  return (
    <SpinnerIcon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("size-10 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
