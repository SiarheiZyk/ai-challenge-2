/**
 * Parses activity date and extracts year and quarter.
 * Date format: "DD-Mon-YYYY" (e.g., "14-May-2025")
 */
const parseActivityDate = (dateStr) => {
  const monthMap = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const parts = dateStr.split('-');
  const month = monthMap[parts[1]];
  const year = parseInt(parts[2], 10);
  const quarter = Math.floor(month / 3) + 1;

  return {
    year: year.toString(),
    quarter: `Q${quarter}`,
  };
};

/**
 * Builds activities array from employees' defined activities.
 * Adds memberId, year, and quarter to each activity.
 */
export const buildActivities = (employees) => {
  const activitiesArray = [];
  employees.forEach((employee) => {
    if (employee.activities) {
      employee.activities.forEach((activity) => {
        const { year, quarter } = parseActivityDate(activity.date);
        activitiesArray.push({
          ...activity,
          memberId: employee.id,
          year,
          quarter,
        });
      });
    }
  });

  return activitiesArray;
};
