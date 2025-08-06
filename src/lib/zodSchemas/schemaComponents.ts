import z from "zod";

export const zRecordId = z
  .number("Must be a number")
  .min(1, "Must be at least 1")
  .int("Must be an integer");

export const zShortString = z
  .string()
  .trim()
  .min(1, "Must be at least 1 character long")
  .max(64, "Cannot be more than 64 characters");

export const zMediumString = z
  .string()
  .trim()
  .min(1, "Must be at least 1 character long")
  .max(256, "Cannot be more than 256 characters");

export const zLongString = z
  .string()
  .trim()
  .min(1, "Must be at least 1 character long")
  .max(512, "Cannot be more than 512 characters");

export const zAbilityScore = z
  .number("Must be a number")
  .min(0, "Must be at least 0")
  .max(30, "Cannot be more than 30")
  .int("Must be an integer");
