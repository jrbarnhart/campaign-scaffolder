export default function getZodArrayErrorPath(
  error: unknown,
): number | undefined {
  const errorExists = error;
  const errorIsObject = typeof error === "object";

  if (errorExists && errorIsObject) {
    const errorHasPath = "path" in error;

    if (errorHasPath) {
      const pathIsArry = Array.isArray(error.path);

      if (pathIsArry) {
        // Assertions in this block could also be handled with a type predicate and restructuring of the code
        const array = error.path as Array<unknown>;
        const firstIndexIsNumber = typeof array[0] === "number";
        if (firstIndexIsNumber) return array[0] as number;
      }
    }
  }

  return undefined;
}
