export function verifyNumeric(
  current: number,
  target: number,
): "green" | "red higher" | "red lower" {
  if (current === target) return "green";
  return current < target ? "red higher" : "red lower";
}

export function verifyType(
  current: string | undefined,
  index: number,
  targetTypes: string[],
): "green" | "yellow" | "red" {
  const targetAtSlot = targetTypes[index];
  if (current === targetAtSlot) return "green";
  if (current && targetTypes.includes(current)) return "yellow";
  return "red";
}
