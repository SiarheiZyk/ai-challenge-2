import { employees, activities, CATEGORY_POINTS } from '../data/mockData';

const defaultFilters = {
  year: 'All Years',
  quarter: 'All Quarters',
  category: 'All Categories',
  searchTerm: '',
};

const normalizeFilters = (filters) => ({ ...defaultFilters, ...filters });

const matchesActivityFilters = (activity, filters) => {
  const yearMatch = filters.year === 'All Years' || activity.year === filters.year;
  const quarterMatch = filters.quarter === 'All Quarters' || activity.quarter === filters.quarter;
  const categoryMatch =
    filters.category === 'All Categories' || activity.category === filters.category;
  return yearMatch && quarterMatch && categoryMatch;
};

export const getPointsForCategory = (categoryLabel) => CATEGORY_POINTS[categoryLabel] || 0;

export const getMemberActivities = (memberId, filters) => {
  const normalized = normalizeFilters(filters);
  return activities
    .filter((act) => act.memberId === memberId)
    .filter((activity) => matchesActivityFilters(activity, normalized));
};

export const calculateMemberScore = (memberId, filters) =>
  getMemberActivities(memberId, filters).reduce(
    (total, activity) => total + getPointsForCategory(activity.category),
    0,
  );

const filterEmployees = (filters) => {
  let filtered = [...employees];

  if (filters.searchTerm?.trim()) {
    const searchLower = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(
      (emp) =>
        emp.name.toLowerCase().includes(searchLower) ||
        emp.title.toLowerCase().includes(searchLower),
    );
  }

  if (
    filters.year !== 'All Years' ||
    filters.quarter !== 'All Quarters' ||
    filters.category !== 'All Categories'
  ) {
    filtered = filtered.filter((emp) => getMemberActivities(emp.id, filters).length > 0);
  }

  return filtered;
};

const sortByScore = (employeeList, filters) =>
  [...employeeList].sort(
    (a, b) => calculateMemberScore(b.id, filters) - calculateMemberScore(a.id, filters),
  );

export const getTopThree = (employeeList, filters) =>
  sortByScore(employeeList, filters).slice(0, 3);

export const getFilteredAndSortedEmployees = (filters) => {
  const normalized = normalizeFilters(filters);
  return sortByScore(filterEmployees(normalized), normalized);
};
