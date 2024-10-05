export interface IArrow {
  type: "left" | "right"
  isActive: boolean
  onClick: () => void
}
