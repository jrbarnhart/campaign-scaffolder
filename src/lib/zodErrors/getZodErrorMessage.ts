// Gets the message value from a ZodError. If that value does not exist the entire error is returned as a string.

export default function getZodErrorMessage(error: unknown): string {
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }
  return String(error);
}
