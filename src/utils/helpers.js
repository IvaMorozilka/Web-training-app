export function calculateAverageProgress(lessons) {
  let totalProgress = 0;
  for (let i = 0; i < lessons.length; i++) {
    totalProgress += lessons[i].progress;
  }
  const averageProgress = totalProgress / lessons.length;
  return averageProgress;
}
