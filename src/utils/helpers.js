export function calculateAverageProgress(lessons) {
  let totalProgress = 0;
  for (let i = 0; i < lessons.length; i++) {
    totalProgress += lessons[i].progress;
  }
  return totalProgress / lessons.length;
}

export function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

export function isLastElementEqual(arr, element) {
  return arr.length > 0 && arr[arr.length - 1] === element;
}
export function checkDecimalInput(input, precision) {
  const regex = new RegExp(`^(0|[1-9]\\d*)(\\.\\d{1,${precision}}|\\.)?$`);
  return regex.test(input);
}
export function getTotal(price, sum) {
  const result = parseFloat(price).toFixed(1) * parseFloat(sum).toFixed(8);
  return result.toFixed(1);
}
