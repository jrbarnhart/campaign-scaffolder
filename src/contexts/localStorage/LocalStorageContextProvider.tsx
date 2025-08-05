import LocalNpcsProvider from "./npcs/LocalNpcsProvider";

export default function LocalStorageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LocalNpcsProvider>{children}</LocalNpcsProvider>;
}
