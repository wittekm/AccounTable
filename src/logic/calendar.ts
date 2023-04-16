export const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const currentDayOfWeek = daysOfWeek[(new Date().getDay() - 1 + 7) % 7];
