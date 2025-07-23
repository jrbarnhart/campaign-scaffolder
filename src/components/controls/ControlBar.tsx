import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export default function ControlBar({
  ...props
}: HTMLAttributes<HTMLDivElement> & { screenReaderHeader?: string }) {
  const { children, className, screenReaderHeader, ...rest } = props;
  return (
    <section
      className={cn(
        className,
        "flex max-w-2xl justify-end gap-1 rounded-md bg-neutral-700 p-1",
      )}
      {...rest}
    >
      <h1 className="sr-only">{screenReaderHeader || "Control Bar"}</h1>
      {children}
    </section>
  );
}
