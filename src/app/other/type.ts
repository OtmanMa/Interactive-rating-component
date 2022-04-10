export interface anItem {
  name: string,
  classes: string
}

export interface aState {
  name?: string,
  options?: string,
  items?: anItem[]
  currentSelect?: number | null,
  step: boolean,
}