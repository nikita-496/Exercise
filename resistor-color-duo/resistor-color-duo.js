function replacer(match) {
    return COLORS.indexOf(match) 
}
 export const decodedValue = (colorNames) => {
    let colorMatchingPattern = /\w+/g
    return(colorNames.replace(colorMatchingPattern,replacer).match(colorMatchingPattern).slice(0,2).join('')) 
 };
 