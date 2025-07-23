export default function ControlBar({
  screenReaderHeader,
  children,
}: {
  screenReaderHeader?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex max-w-2xl justify-end gap-1 rounded-md bg-neutral-700 p-1">
      <h1 className="sr-only">{screenReaderHeader || "Control Bar"}</h1>
      {children}
    </section>
  );
}
