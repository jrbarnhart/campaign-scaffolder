type ControlBarProps = {
  screenReaderHeader?: string;
  children: React.ReactNode;
};

/**
 * A container for ControlBarButtons.
 *
 * @param {ControlBarProps} props - The props for the ControlBar component.
 * @param {string | undefined} props.screenReaderHeader - The screen-reader-only header content for the ControlBar.
 * @param {children} props.children - The child components to render inside the ControlBar, intended to be ControlBarButton elements.
 * @returns {JSX.Element}
 *
 * @example
 *  <ControlBar screenReaderHeader="Map Control Bar">
 *    <ControlBarButton toolTip="Pan" aria-label="Pan">
 *      <Hand />
 *    </ControlBarButton>
 *    <ControlBarButton toolTip="Select" aria-label="Select">
 *      <MousePointer />
 *    </ControlBarButton>
 *    <ControlBarButton toolTip="Settings" aria-label="Settings">
 *      <Settings />
 *    </ControlBarButton>
 *    <ControlBarButton toolTip="Generate" aria-label="Generate">
 *      <Play />
 *    </ControlBarButton>
 *  </ControlBar>
 */
export default function ControlBar({
  screenReaderHeader,
  children,
}: ControlBarProps) {
  return (
    <section className="flex max-w-2xl justify-end gap-1 rounded-md bg-neutral-700 p-1">
      <h1 className="sr-only">{screenReaderHeader || "Control Bar"}</h1>
      {children}
    </section>
  );
}
