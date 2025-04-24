const ORIENTATION_KEY = "TESTVELIXO_FACTORIAL_ORIENTATION";

type Orientation = "row" | "column";

export function getOrientation(): Orientation {
  return (localStorage.getItem(ORIENTATION_KEY) as Orientation) || "row";
}

export function setOrientation(value: Orientation) {
  localStorage.setItem(ORIENTATION_KEY, value);
}