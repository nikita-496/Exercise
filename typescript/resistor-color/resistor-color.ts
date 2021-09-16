export const colorCode = (color: string | string[]): number | string[] => typeof color === "string" ?  COLORS.indexOf(color) : COLORS

export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']
