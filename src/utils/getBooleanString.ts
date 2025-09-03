export function getBooleanString(value: unknown): "true" | "false" {
  return value ? ("true" as const) : ("false" as const);
}