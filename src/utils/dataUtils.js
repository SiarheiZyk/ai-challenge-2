import { employees, activities } from '../data/mockData';

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
      const employeeActivities = activities.filter((act) => act.memberId === emp.id);

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
 * Sorts employees by score in descending order
 */
export const sortByScore = (employeeList) => {
  return [...employeeList].sort((a, b) => b.score - a.score);
};

/**
 * Gets the top 3 employees
 */
export const getTopThree = (employeeList) => {
  const sorted = sortByScore(employeeList);
  return sorted.slice(0, 3);
};

/**
 * Gets activities for a specific member
 */
export const getMemberActivities = (memberId) => {
  return activities.filter((act) => act.memberId === memberId);
};

/**
 * Applies all filters, sorts by score, and returns the result
 */
export const getFilteredAndSortedEmployees = (year, quarter, category, searchTerm) => {
  const filtered = filterEmployees(year, quarter, category, searchTerm);
  return sortByScore(filtered);
};
