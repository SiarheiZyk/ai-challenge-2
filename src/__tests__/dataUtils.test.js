import { describe, it, expect, vi, beforeEach } from 'vitest';

// We need to mock the mockData module so tests are deterministic and don't
// depend on the full 24-person dataset.
vi.mock('../data/mockData', () => {
  const CATEGORY_POINTS = {
    'Feature Development': 48,
    'Code Review': 32,
    'Bug Fixing': 20,
    'Team Leadership': 56,
    Mentoring: 40,
    Training: 24,
    Documentation: 16,
    'Public Speaking': 64,
  };

  const employees = [
    {
      id: 1,
      name: 'Alice Johnson',
      title: 'Senior Software Engineer',
      avatar: '',
    },
    {
      id: 2,
      name: 'Bob Smith',
      title: 'Manager',
      avatar: '',
    },
    {
      id: 3,
      name: 'Carol Williams',
      title: 'QA Engineer',
      avatar: '',
    },
  ];

  const activities = [
    // Alice - 2025 Q1, Feature Development (48) + Code Review (32) = 80
    { id: 1, memberId: 1, category: 'Feature Development', year: '2025', quarter: 'Q1' },
    { id: 2, memberId: 1, category: 'Code Review', year: '2025', quarter: 'Q2' },
    // Bob - 2026 Q1, Team Leadership (56) + Mentoring (40) = 96
    { id: 3, memberId: 2, category: 'Team Leadership', year: '2026', quarter: 'Q1' },
    { id: 4, memberId: 2, category: 'Mentoring', year: '2026', quarter: 'Q2' },
    // Carol - 2025 Q1, Bug Fixing (20)
    { id: 5, memberId: 3, category: 'Bug Fixing', year: '2025', quarter: 'Q1' },
  ];

  return { employees, activities, CATEGORY_POINTS };
});

import {
  getPointsForCategory,
  getMemberActivities,
  calculateMemberScore,
  getTopThree,
  getFilteredAndSortedEmployees,
} from '../utils/dataUtils';
import { employees } from '../data/mockData';

describe('getPointsForCategory', () => {
  it('returns correct points for known categories', () => {
    expect(getPointsForCategory('Feature Development')).toBe(48);
    expect(getPointsForCategory('Code Review')).toBe(32);
    expect(getPointsForCategory('Bug Fixing')).toBe(20);
    expect(getPointsForCategory('Team Leadership')).toBe(56);
    expect(getPointsForCategory('Mentoring')).toBe(40);
    expect(getPointsForCategory('Training')).toBe(24);
    expect(getPointsForCategory('Documentation')).toBe(16);
    expect(getPointsForCategory('Public Speaking')).toBe(64);
  });

  it('returns 0 for unknown categories', () => {
    expect(getPointsForCategory('Unknown')).toBe(0);
    expect(getPointsForCategory('')).toBe(0);
    expect(getPointsForCategory(undefined)).toBe(0);
  });
});

describe('getMemberActivities', () => {
  it('returns all activities for a member when no filters applied', () => {
    const result = getMemberActivities(1, {});
    expect(result).toHaveLength(2);
    expect(result.every((a) => a.memberId === 1)).toBe(true);
  });

  it('returns empty array for non-existent member', () => {
    expect(getMemberActivities(999, {})).toEqual([]);
  });

  it('filters by year', () => {
    const result = getMemberActivities(1, { year: '2025' });
    expect(result).toHaveLength(2);
  });

  it('returns empty when year does not match', () => {
    const result = getMemberActivities(1, { year: '2026' });
    expect(result).toHaveLength(0);
  });

  it('filters by quarter', () => {
    const result = getMemberActivities(1, { quarter: 'Q1' });
    expect(result).toHaveLength(1);
    expect(result[0].quarter).toBe('Q1');
  });

  it('filters by category', () => {
    const result = getMemberActivities(1, { category: 'Code Review' });
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe('Code Review');
  });

  it('combines year and quarter filters', () => {
    const result = getMemberActivities(1, { year: '2025', quarter: 'Q2' });
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe('Code Review');
  });

  it('combines year and category filters', () => {
    const result = getMemberActivities(1, { year: '2025', category: 'Feature Development' });
    expect(result).toHaveLength(1);
  });

  it('returns empty when category does not match', () => {
    const result = getMemberActivities(1, { category: 'Mentoring' });
    expect(result).toHaveLength(0);
  });
});

describe('calculateMemberScore', () => {
  it('calculates total score without filters', () => {
    // Alice: Feature Development (48) + Code Review (32) = 80
    expect(calculateMemberScore(1, {})).toBe(80);
  });

  it('calculates score filtered by year', () => {
    // Bob in 2026: Team Leadership (56) + Mentoring (40) = 96
    expect(calculateMemberScore(2, { year: '2026' })).toBe(96);
  });

  it('calculates score filtered by quarter', () => {
    // Alice Q1: Feature Development (48)
    expect(calculateMemberScore(1, { quarter: 'Q1' })).toBe(48);
  });

  it('returns 0 for member with no matching activities', () => {
    expect(calculateMemberScore(1, { year: '2099' })).toBe(0);
  });

  it('returns 0 for non-existent member', () => {
    expect(calculateMemberScore(999, {})).toBe(0);
  });
});

describe('getTopThree', () => {
  it('returns top 3 employees sorted by score', () => {
    const top = getTopThree(employees, {});
    expect(top).toHaveLength(3);
  });

  it('returns fewer than 3 if list is smaller', () => {
    const top = getTopThree(employees.slice(0, 2), {});
    expect(top).toHaveLength(2);
  });

  it('first element has the highest score', () => {
    const top = getTopThree(employees, {});
    const firstScore = calculateMemberScore(top[0].id, {});
    const secondScore = calculateMemberScore(top[1].id, {});
    expect(firstScore).toBeGreaterThanOrEqual(secondScore);
  });

  it('returns empty array for empty employee list', () => {
    expect(getTopThree([], {})).toEqual([]);
  });

  it('respects year filter when ranking', () => {
    // In 2026 only Bob has activities
    const top = getTopThree(employees, { year: '2026' });
    expect(top[0].id).toBe(2); // Bob has the most 2026 activities
  });
});

describe('getFilteredAndSortedEmployees', () => {
  it('returns all employees sorted by score with no filters', () => {
    const result = getFilteredAndSortedEmployees({});
    expect(result).toHaveLength(3);
    // First should have highest score
    const scores = result.map((e) => calculateMemberScore(e.id, {}));
    for (let i = 0; i < scores.length - 1; i++) {
      expect(scores[i]).toBeGreaterThanOrEqual(scores[i + 1]);
    }
  });

  it('filters by search term on name', () => {
    const result = getFilteredAndSortedEmployees({ searchTerm: 'Alice' });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Alice Johnson');
  });

  it('filters by search term on title (case insensitive)', () => {
    const result = getFilteredAndSortedEmployees({ searchTerm: 'manager' });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Bob Smith');
  });

  it('returns empty array when search term matches no one', () => {
    const result = getFilteredAndSortedEmployees({ searchTerm: 'zzznomatch' });
    expect(result).toHaveLength(0);
  });

  it('filters by year and excludes employees with no matching activities', () => {
    // Only Alice has 2025 activities; Carol also has 2025 activities; Bob only 2026
    const result = getFilteredAndSortedEmployees({ year: '2025' });
    const ids = result.map((e) => e.id);
    expect(ids).toContain(1); // Alice
    expect(ids).toContain(3); // Carol
    expect(ids).not.toContain(2); // Bob (2026 only)
  });

  it('filters by quarter', () => {
    const result = getFilteredAndSortedEmployees({ quarter: 'Q1' });
    // Q1 activities: Alice (Feature Dev, 2025 Q1), Bob (Team Lead, 2026 Q1), Carol (Bug Fixing, 2025 Q1)
    expect(result).toHaveLength(3);
  });

  it('filters by category', () => {
    const result = getFilteredAndSortedEmployees({ category: 'Mentoring' });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2); // Only Bob has Mentoring
  });

  it('combines search term and year filter', () => {
    const result = getFilteredAndSortedEmployees({ searchTerm: 'Alice', year: '2025' });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Alice Johnson');
  });

  it('combined filters that match nothing return empty array', () => {
    const result = getFilteredAndSortedEmployees({ searchTerm: 'Bob', year: '2025' });
    // Bob only has 2026 activities
    expect(result).toHaveLength(0);
  });
});
