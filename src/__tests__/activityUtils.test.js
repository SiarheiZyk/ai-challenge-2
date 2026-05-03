import { describe, it, expect } from 'vitest';
import { buildActivities } from '../utils/activityUtils';

describe('buildActivities', () => {
  it('returns an empty array when given an empty employees list', () => {
    expect(buildActivities([])).toEqual([]);
  });

  it('returns an empty array when employees have no activities', () => {
    const employees = [{ id: 1, name: 'Alice', activities: [] }];
    expect(buildActivities(employees)).toEqual([]);
  });

  it('returns an empty array when employees have no activities property', () => {
    const employees = [{ id: 1, name: 'Alice' }];
    expect(buildActivities(employees)).toEqual([]);
  });

  it('attaches memberId to each activity', () => {
    const employees = [
      {
        id: 42,
        name: 'Alice',
        activities: [{ id: 1, activityName: 'Task', category: 'Code Review', date: '14-May-2025' }],
      },
    ];
    const result = buildActivities(employees);
    expect(result[0].memberId).toBe(42);
  });

  it('correctly parses year from date string', () => {
    const employees = [
      {
        id: 1,
        activities: [{ id: 1, activityName: 'Task', category: 'Code Review', date: '14-May-2025' }],
      },
    ];
    const result = buildActivities(employees);
    expect(result[0].year).toBe('2025');
  });

  it('correctly parses year for 2026', () => {
    const employees = [
      {
        id: 1,
        activities: [{ id: 1, activityName: 'Task', category: 'Code Review', date: '11-Jan-2026' }],
      },
    ];
    const result = buildActivities(employees);
    expect(result[0].year).toBe('2026');
  });

  it('correctly calculates Q1 (Jan-Mar)', () => {
    const months = ['Jan', 'Feb', 'Mar'];
    months.forEach((month) => {
      const employees = [
        {
          id: 1,
          activities: [
            { id: 1, activityName: 'T', category: 'Bug Fixing', date: `01-${month}-2025` },
          ],
        },
      ];
      expect(buildActivities(employees)[0].quarter).toBe('Q1');
    });
  });

  it('correctly calculates Q2 (Apr-Jun)', () => {
    const months = ['Apr', 'May', 'Jun'];
    months.forEach((month) => {
      const employees = [
        {
          id: 1,
          activities: [
            { id: 1, activityName: 'T', category: 'Bug Fixing', date: `01-${month}-2025` },
          ],
        },
      ];
      expect(buildActivities(employees)[0].quarter).toBe('Q2');
    });
  });

  it('correctly calculates Q3 (Jul-Sep)', () => {
    const months = ['Jul', 'Aug', 'Sep'];
    months.forEach((month) => {
      const employees = [
        {
          id: 1,
          activities: [
            { id: 1, activityName: 'T', category: 'Bug Fixing', date: `01-${month}-2025` },
          ],
        },
      ];
      expect(buildActivities(employees)[0].quarter).toBe('Q3');
    });
  });

  it('correctly calculates Q4 (Oct-Dec)', () => {
    const months = ['Oct', 'Nov', 'Dec'];
    months.forEach((month) => {
      const employees = [
        {
          id: 1,
          activities: [
            { id: 1, activityName: 'T', category: 'Bug Fixing', date: `01-${month}-2025` },
          ],
        },
      ];
      expect(buildActivities(employees)[0].quarter).toBe('Q4');
    });
  });

  it('preserves original activity fields', () => {
    const activity = { id: 7, activityName: 'My Task', category: 'Training', date: '03-Oct-2026' };
    const employees = [{ id: 2, activities: [activity] }];
    const result = buildActivities(employees);
    expect(result[0]).toMatchObject({
      id: 7,
      activityName: 'My Task',
      category: 'Training',
      date: '03-Oct-2026',
    });
  });

  it('flattens activities from multiple employees', () => {
    const employees = [
      {
        id: 1,
        activities: [
          { id: 1, activityName: 'A', category: 'Training', date: '01-Jan-2025' },
          { id: 2, activityName: 'B', category: 'Training', date: '01-Apr-2025' },
        ],
      },
      {
        id: 2,
        activities: [{ id: 3, activityName: 'C', category: 'Mentoring', date: '01-Jul-2026' }],
      },
    ];
    const result = buildActivities(employees);
    expect(result).toHaveLength(3);
    expect(result[0].memberId).toBe(1);
    expect(result[1].memberId).toBe(1);
    expect(result[2].memberId).toBe(2);
  });
});
