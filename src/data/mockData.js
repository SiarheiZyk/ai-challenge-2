// Mock data for the Leaderboard application

// List of all years available for filtering
export const YEARS = ['2023', '2024', '2025', '2026'];

// List of all quarters available for filtering
export const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4'];

// List of all activity categories
export const CATEGORIES = [
  'Public Speaking',
  'Code Review',
  'Documentation',
  'Training',
  'Bug Fixing',
  'Feature Development',
  'Team Leadership',
  'Mentoring',
];

// Mock employee data (50 people)
export const employees = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Senior Software Engineer',
    score: 536,
    totalContributions: 17,
  },
  { id: 2, name: 'Bob Smith', title: 'Manager', score: 328, totalContributions: 12 },
  { id: 3, name: 'Carol Williams', title: 'QA Engineer', score: 320, totalContributions: 14 },
  { id: 4, name: 'David Brown', title: 'Senior Developer', score: 312, totalContributions: 11 },
  { id: 5, name: 'Emma Davis', title: 'Product Manager', score: 298, totalContributions: 10 },
  { id: 6, name: 'Frank Miller', title: 'Frontend Engineer', score: 287, totalContributions: 9 },
  { id: 7, name: 'Grace Lee', title: 'DevOps Engineer', score: 276, totalContributions: 8 },
  { id: 8, name: 'Henry Wilson', title: 'Backend Engineer', score: 265, totalContributions: 7 },
  { id: 9, name: 'Iris Martinez', title: 'QA Lead', score: 254, totalContributions: 9 },
  { id: 10, name: 'Jack Taylor', title: 'Senior QA Engineer', score: 243, totalContributions: 8 },
  { id: 11, name: 'Karen Anderson', title: 'Tech Lead', score: 232, totalContributions: 7 },
  { id: 12, name: 'Leo Thomas', title: 'Junior Developer', score: 221, totalContributions: 6 },
  {
    id: 13,
    name: 'Mia Jackson',
    title: 'Senior Software Engineer',
    score: 210,
    totalContributions: 7,
  },
  { id: 14, name: 'Noah White', title: 'Full Stack Engineer', score: 199, totalContributions: 6 },
  { id: 15, name: 'Olivia Harris', title: 'Data Engineer', score: 188, totalContributions: 5 },
  { id: 16, name: 'Peter Martin', title: 'Senior Engineer', score: 177, totalContributions: 6 },
  { id: 17, name: 'Quinn Thompson', title: 'QA Engineer', score: 166, totalContributions: 5 },
  { id: 18, name: 'Rachel Garcia', title: 'Product Manager', score: 155, totalContributions: 4 },
  {
    id: 19,
    name: 'Samuel Rodriguez',
    title: 'Senior Developer',
    score: 144,
    totalContributions: 5,
  },
  { id: 20, name: 'Tanya Clark', title: 'Engineering Manager', score: 133, totalContributions: 4 },
  { id: 21, name: 'Uma Lewis', title: 'Frontend Engineer', score: 122, totalContributions: 4 },
  { id: 22, name: 'Victor Walker', title: 'Backend Engineer', score: 111, totalContributions: 3 },
  { id: 23, name: 'Wendy Hall', title: 'Senior QA Engineer', score: 100, totalContributions: 3 },
  { id: 24, name: 'Xavier Allen', title: 'Junior Engineer', score: 98, totalContributions: 3 },
  { id: 25, name: 'Yara Young', title: 'Tech Lead', score: 87, totalContributions: 3 },
  { id: 26, name: 'Zoe King', title: 'Senior Developer', score: 76, totalContributions: 2 },
  { id: 27, name: 'Aaron Scott', title: 'QA Engineer', score: 65, totalContributions: 2 },
  { id: 28, name: 'Bella Green', title: 'Product Manager', score: 54, totalContributions: 2 },
  { id: 29, name: 'Chris Adams', title: 'Full Stack Engineer', score: 43, totalContributions: 1 },
  { id: 30, name: 'Diana Nelson', title: 'Senior Engineer', score: 42, totalContributions: 2 },
  { id: 31, name: 'Ethan Carter', title: 'Frontend Engineer', score: 41, totalContributions: 1 },
  { id: 32, name: 'Fiona Mitchell', title: 'Backend Engineer', score: 40, totalContributions: 1 },
  { id: 33, name: 'George Perez', title: 'DevOps Engineer', score: 39, totalContributions: 1 },
  { id: 34, name: 'Hannah Roberts', title: 'QA Lead', score: 38, totalContributions: 1 },
  { id: 35, name: 'Ian Phillips', title: 'Senior Developer', score: 37, totalContributions: 1 },
  {
    id: 36,
    name: 'Julia Campbell',
    title: 'Engineering Manager',
    score: 36,
    totalContributions: 1,
  },
  { id: 37, name: 'Kevin Parker', title: 'Tech Lead', score: 35, totalContributions: 1 },
  { id: 38, name: 'Laura Evans', title: 'Senior QA Engineer', score: 34, totalContributions: 1 },
  { id: 39, name: 'Marcus Edwards', title: 'Frontend Engineer', score: 33, totalContributions: 1 },
  { id: 40, name: 'Nina Collins', title: 'Backend Engineer', score: 32, totalContributions: 1 },
  { id: 41, name: 'Oscar Stewart', title: 'Junior Developer', score: 31, totalContributions: 1 },
  { id: 42, name: 'Piper Sanchez', title: 'QA Engineer', score: 30, totalContributions: 1 },
  { id: 43, name: 'Quinn Morris', title: 'Product Manager', score: 29, totalContributions: 1 },
  { id: 44, name: 'Riley Rogers', title: 'Senior Engineer', score: 28, totalContributions: 1 },
  { id: 45, name: 'Sage Morgan', title: 'Frontend Engineer', score: 27, totalContributions: 1 },
  { id: 46, name: 'Tyler Bell', title: 'Backend Engineer', score: 26, totalContributions: 1 },
  { id: 47, name: 'Uma Murphy', title: 'DevOps Engineer', score: 25, totalContributions: 1 },
  { id: 48, name: 'Victor Bailey', title: 'Tech Lead', score: 24, totalContributions: 1 },
  { id: 49, name: 'Willa Rivers', title: 'Senior Developer', score: 23, totalContributions: 1 },
  { id: 50, name: 'Xavier Stone', title: 'QA Engineer', score: 22, totalContributions: 1 },
];

// Helper function to generate activities for members
function generateActivitiesForMember(memberId, baseActivityId) {
  const activitiesArray = [];
  let activityId = baseActivityId;

  const categoryList = [
    'Public Speaking',
    'Code Review',
    'Documentation',
    'Training',
    'Bug Fixing',
    'Feature Development',
    'Team Leadership',
    'Mentoring',
  ];

  const activityNames = [
    'Task Completion',
    'Code Review',
    'Bug Fix',
    'Feature Implementation',
    'Documentation Update',
    'Training Session',
    'Team Leadership',
    'Mentoring Session',
    'Architecture Review',
    'Performance Optimization',
  ];

  const numActivities = Math.floor(Math.random() * 4) + 1; // 1-4 activities per member

  for (let i = 0; i < numActivities; i++) {
    const daysAgo = Math.floor(Math.random() * 365) + 1;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    activitiesArray.push({
      id: activityId++,
      memberId,
      activityName: activityNames[Math.floor(Math.random() * activityNames.length)] + ` ${i + 1}`,
      category: categoryList[Math.floor(Math.random() * categoryList.length)],
      date: formattedDate,
      points: Math.floor(Math.random() * 80) + 8, // 8-88 points
      year: date.getFullYear().toString(),
      quarter: getQuarter(date.getMonth()),
    });
  }

  return activitiesArray;
}

// Helper to determine quarter from month
function getQuarter(month) {
  if (month < 3) return 'Q1';
  if (month < 6) return 'Q2';
  if (month < 9) return 'Q3';
  return 'Q4';
}

// Generate all activities
export const activities = [];
let currentActivityId = 1;

for (let memberId = 1; memberId <= 50; memberId++) {
  const memberActivities = generateActivitiesForMember(memberId, currentActivityId);
  activities.push(...memberActivities);
  currentActivityId += memberActivities.length;
}

// Export function to get activities for a specific member
export const getActivitiesByMemberId = (memberId) => {
  return activities.filter((activity) => activity.memberId === memberId);
};
