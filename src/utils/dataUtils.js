import { employees, activities, CATEGORY_POINTS } from '../data/mockData';

/**
 * Parses activity date and extracts year and quarter
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

// Helper function to get points for a category
export const getPointsForCategory = (categoryLabel) => {
  return CATEGORY_POINTS[categoryLabel] || 0;
};

/**
 * Builds activities array from employees' defined activities
 * Adds memberId, year, and quarter to each activity
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

// Get activities for a specific member
const getActivitiesByMemberId = (memberId) => {
  return activities.filter((act) => act.memberId === memberId);
};

// Calculate total score for a member based on their activities
export const calculateMemberScore = (memberId) => {
  const memberActivities = getActivitiesByMemberId(memberId);
  return memberActivities.reduce(
    (total, activity) => total + getPointsForCategory(activity.category),
    0,
  );
};

/**
 * Filters employees based on year, quarter, category, and search term
 * All active filters must match (AND logic)
 */
export const filterEmployees = (year, quarter, category, searchTerm) => {
  let filtered = [...employees];

  // Filter by search term (case-insensitive)
  if (searchTerm && searchTerm.trim()) {
    const searchLower = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (emp) =>
        emp.name.toLowerCase().includes(searchLower) ||
        emp.title.toLowerCase().includes(searchLower),
    );
  }

  // Filter by year, quarter, category based on activities
  if (year !== 'All Years' || quarter !== 'All Quarters' || category !== 'All Categories') {
    filtered = filtered.filter((emp) => {
      const employeeActivities = getActivitiesByMemberId(emp.id);

      return employeeActivities.some((act) => {
        const yearMatch = year === 'All Years' || act.year === year;
        const quarterMatch = quarter === 'All Quarters' || act.quarter === quarter;
        const categoryMatch = category === 'All Categories' || act.category === category;

        return yearMatch && quarterMatch && categoryMatch;
      });
    });
  }

  return filtered;
};

/**
 * Sorts employees by calculated score (sum of activity points) in descending order
 */
export const sortByScore = (employeeList) => {
  return [...employeeList].sort((a, b) => {
    const scoreA = calculateMemberScore(a.id);
    const scoreB = calculateMemberScore(b.id);
    return scoreB - scoreA;
  });
};

/**
 * Gets the top 3 employees
 */
export const getTopThree = (employeeList) => {
  const sorted = sortByScore(employeeList);
  return sorted.slice(0, 3);
};

/**
 * Applies all filters, sorts by score, and returns the result
 */
export const getFilteredAndSortedEmployees = (year, quarter, category, searchTerm) => {
  const filtered = filterEmployees(year, quarter, category, searchTerm);
  return sortByScore(filtered);
};

/**
 * Gets activities for a specific member
 */
export const getMemberActivities = (memberId) => {
  return getActivitiesByMemberId(memberId);
};
