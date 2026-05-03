// Mock data for the Leaderboard application

import { buildActivities } from '../utils/dataUtils';

// List of all years available for filtering
export const YEARS = ['2023', '2024', '2025', '2026'];

// List of all quarters available for filtering
export const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4'];

// Activity categories with label and points
export const ACTIVITY_CATEGORIES = {
  publicSpeaking: { label: 'Public Speaking', points: 64 },
  codeReview: { label: 'Code Review', points: 32 },
  documentation: { label: 'Documentation', points: 16 },
  training: { label: 'Training', points: 24 },
  bugFixing: { label: 'Bug Fixing', points: 20 },
  featureDevelopment: { label: 'Feature Development', points: 48 },
  teamLeadership: { label: 'Team Leadership', points: 56 },
  mentoring: { label: 'Mentoring', points: 40 },
};

// Derived categories list for filtering
export const CATEGORIES = Object.values(ACTIVITY_CATEGORIES).map((cat) => cat.label);

// For backward compatibility - maps label to points
export const CATEGORY_POINTS = Object.fromEntries(
  Object.values(ACTIVITY_CATEGORIES).map((cat) => [cat.label, cat.points]),
);

// Mock employee data (24 people) with defined activities
export const employees = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Senior Software Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice%20Johnson%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 1,
        activityName: 'Task Completion 1',
        category: 'Feature Development',
        date: '14-May-2025',
      },
      {
        id: 2,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '10-May-2025',
      },
      { id: 3, activityName: 'Bug Fix 1', category: 'Bug Fixing', date: '08-May-2025' },
      {
        id: 4,
        activityName: 'Team Leadership 1',
        category: 'Code Review',
        date: '05-May-2025',
      },
    ],
  },
  {
    id: 2,
    name: 'Bob Smith',
    title: 'Manager',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob%20Smith%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 5,
        activityName: 'Team Leadership 1',
        category: 'Team Leadership',
        date: '12-May-2025',
      },
      {
        id: 6,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '08-May-2025',
      },
      {
        id: 7,
        activityName: 'Mentoring 1',
        category: 'Mentoring',
        date: '05-May-2025',
      },
      {
        id: 8,
        activityName: 'Documentation 1',
        category: 'Team Leadership',
        date: '30-Apr-2025',
      },
    ],
  },
  {
    id: 3,
    name: 'Carol Williams',
    title: 'QA Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Carol%20Williams%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 9,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '13-May-2025',
      },
      {
        id: 10,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '08-May-2025',
      },
      {
        id: 11,
        activityName: 'Bug Fix 2',
        category: 'Bug Fixing',
        date: '28-Apr-2025',
      },
      {
        id: 12,
        activityName: 'Training Session 1',
        category: 'Code Review',
        date: '02-May-2025',
      },
    ],
  },
  {
    id: 4,
    name: 'David Brown',
    title: 'Senior Developer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=David%20Brown%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 13,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '14-May-2025',
      },
      {
        id: 14,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '11-May-2025',
      },
      {
        id: 15,
        activityName: 'Team Leadership 1',
        category: 'Feature Development',
        date: '05-May-2025',
      },
    ],
  },
  {
    id: 5,
    name: 'Emma Davis',
    title: 'Product Manager',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma%20Davis%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 16,
        activityName: 'Team Leadership 1',
        category: 'Team Leadership',
        date: '12-May-2025',
      },
      {
        id: 17,
        activityName: 'Public Speaking 1',
        category: 'Public Speaking',
        date: '08-May-2025',
      },
      {
        id: 18,
        activityName: 'Mentoring 1',
        category: 'Mentoring',
        date: '05-May-2025',
      },
      {
        id: 19,
        activityName: 'Training Session 1',
        category: 'Public Speaking',
        date: '27-Apr-2025',
      },
    ],
  },
  {
    id: 6,
    name: 'Frank Miller',
    title: 'Frontend Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Frank%20Miller%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 20,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '13-May-2025',
      },
      {
        id: 21,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '10-May-2025',
      },
      {
        id: 22,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '04-May-2025',
      },
    ],
  },
  {
    id: 7,
    name: 'Grace Lee',
    title: 'DevOps Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace%20Lee%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 23,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '12-May-2025',
      },
      {
        id: 24,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '09-May-2025',
      },
      {
        id: 25,
        activityName: 'Team Leadership 1',
        category: 'Feature Development',
        date: '03-May-2025',
      },
      {
        id: 26,
        activityName: 'Training 1',
        category: 'Code Review',
        date: '28-Apr-2025',
      },
    ],
  },
  {
    id: 8,
    name: 'Henry Wilson',
    title: 'Backend Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Henry%20Wilson%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 27,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '11-May-2025',
      },
      {
        id: 28,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '08-May-2025',
      },
      {
        id: 29,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '05-May-2025',
      },
    ],
  },
  {
    id: 9,
    name: 'Iris Martinez',
    title: 'QA Lead',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Iris%20Martinez%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 30,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '12-May-2025',
      },
      {
        id: 31,
        activityName: 'Team Leadership 1',
        category: 'Team Leadership',
        date: '09-May-2025',
      },
      {
        id: 32,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '06-May-2025',
      },
      {
        id: 33,
        activityName: 'Bug Fix 2',
        category: 'Bug Fixing',
        date: '20-Apr-2025',
      },
    ],
  },
  {
    id: 10,
    name: 'Jack Taylor',
    title: 'Senior QA Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack%20Taylor%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 34,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '11-May-2025',
      },
      {
        id: 35,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '08-May-2025',
      },
      {
        id: 36,
        activityName: 'Team Leadership 1',
        category: 'Team Leadership',
        date: '05-May-2025',
      },
      {
        id: 37,
        activityName: 'Mentoring 1',
        category: 'Code Review',
        date: '27-Apr-2025',
      },
    ],
  },
  {
    id: 11,
    name: 'Kate Rodriguez',
    title: 'UX Designer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Kate%20Rodriguez%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 38,
        activityName: 'Documentation Update 1',
        category: 'Documentation',
        date: '13-May-2025',
      },
      {
        id: 39,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '10-May-2025',
      },
      {
        id: 40,
        activityName: 'Training 1',
        category: 'Documentation',
        date: '05-May-2025',
      },
    ],
  },
  {
    id: 12,
    name: 'Liam Chen',
    title: 'Security Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam%20Chen%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 41,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '12-May-2025',
      },
      {
        id: 42,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '09-May-2025',
      },
      {
        id: 43,
        activityName: 'Code Review 2',
        category: 'Code Review',
        date: '05-May-2025',
      },
      {
        id: 44,
        activityName: 'Documentation 1',
        category: 'Bug Fixing',
        date: '01-May-2025',
      },
    ],
  },
  {
    id: 13,
    name: 'Michelle Park',
    title: 'Technical Lead',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Michelle%20Park%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 45,
        activityName: 'Team Leadership 1',
        category: 'Team Leadership',
        date: '14-May-2025',
      },
      {
        id: 46,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '11-May-2025',
      },
      {
        id: 47,
        activityName: 'Mentoring 1',
        category: 'Mentoring',
        date: '08-May-2025',
      },
    ],
  },
  {
    id: 14,
    name: 'Nathan Garcia',
    title: 'Database Administrator',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Nathan%20Garcia%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 48,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '13-May-2025',
      },
      {
        id: 49,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '10-May-2025',
      },
      {
        id: 50,
        activityName: 'Training Session 1',
        category: 'Feature Development',
        date: '06-May-2025',
      },
      {
        id: 51,
        activityName: 'Documentation 1',
        category: 'Code Review',
        date: '02-May-2025',
      },
    ],
  },
  {
    id: 15,
    name: 'Olivia Thompson',
    title: 'Data Scientist',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia%20Thompson%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 52,
        activityName: 'Training Session 1',
        category: 'Training',
        date: '12-May-2025',
      },
      {
        id: 53,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '09-May-2025',
      },
      {
        id: 54,
        activityName: 'Documentation Update 1',
        category: 'Training',
        date: '05-May-2025',
      },
    ],
  },
  {
    id: 16,
    name: 'Peter Walsh',
    title: 'Infrastructure Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Peter%20Walsh%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 55,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '11-May-2025',
      },
      {
        id: 56,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '08-May-2025',
      },
      {
        id: 57,
        activityName: 'Code Review 1',
        category: 'Feature Development',
        date: '04-May-2025',
      },
    ],
  },
  {
    id: 17,
    name: "Quinn O'Brien",
    title: 'API Developer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Quinn%20O%27Brien%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 58,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '13-May-2025',
      },
      {
        id: 59,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '10-May-2025',
      },
      {
        id: 60,
        activityName: 'Code Review 2',
        category: 'Code Review',
        date: '06-May-2025',
      },
      {
        id: 61,
        activityName: 'Bug Fix 1',
        category: 'Feature Development',
        date: '01-May-2025',
      },
    ],
  },
  {
    id: 18,
    name: 'Rachel King',
    title: 'Support Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel%20King%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 62,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '12-May-2025',
      },
      {
        id: 63,
        activityName: 'Documentation 1',
        category: 'Documentation',
        date: '09-May-2025',
      },
      {
        id: 64,
        activityName: 'Training Session 1',
        category: 'Bug Fixing',
        date: '05-May-2025',
      },
    ],
  },
  {
    id: 19,
    name: 'Samuel Gray',
    title: 'Performance Engineer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel%20Gray%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 65,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '13-May-2025',
      },
      {
        id: 66,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '10-May-2025',
      },
      {
        id: 67,
        activityName: 'Bug Fix 1',
        category: 'Code Review',
        date: '06-May-2025',
      },
      {
        id: 68,
        activityName: 'Training 1',
        category: 'Feature Development',
        date: '02-May-2025',
      },
    ],
  },
  {
    id: 20,
    name: 'Tina White',
    title: 'Mobile Developer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Tina%20White%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 69,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '14-May-2025',
      },
      {
        id: 70,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '11-May-2025',
      },
      {
        id: 71,
        activityName: 'Bug Fix 1',
        category: 'Feature Development',
        date: '07-May-2025',
      },
    ],
  },
  {
    id: 21,
    name: 'Ulysses Black',
    title: 'Full Stack Developer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Ulysses%20Black%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 72,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '12-May-2025',
      },
      {
        id: 73,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '09-May-2025',
      },
      {
        id: 74,
        activityName: 'Code Review 2',
        category: 'Code Review',
        date: '05-May-2025',
      },
      {
        id: 75,
        activityName: 'Bug Fix 1',
        category: 'Feature Development',
        date: '01-May-2025',
      },
    ],
  },
  {
    id: 22,
    name: 'Victoria Green',
    title: 'Compliance Officer',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Victoria%20Green%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 76,
        activityName: 'Documentation 1',
        category: 'Documentation',
        date: '13-May-2025',
      },
      {
        id: 77,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '10-May-2025',
      },
      {
        id: 78,
        activityName: 'Training Session 1',
        category: 'Documentation',
        date: '06-May-2025',
      },
    ],
  },
  {
    id: 23,
    name: 'William Scott',
    title: 'Solutions Architect',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=William%20Scott%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 79,
        activityName: 'Team Leadership 1',
        category: 'Team Leadership',
        date: '12-May-2025',
      },
      {
        id: 80,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '09-May-2025',
      },
      {
        id: 81,
        activityName: 'Mentoring 1',
        category: 'Team Leadership',
        date: '05-May-2025',
      },
    ],
  },
  {
    id: 24,
    name: 'Xena Nelson',
    title: 'Product Specialist',
    avatar:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Xena%20Nelson%20VT2025&mouthType=laughing&eyeType=happy',
    activities: [
      {
        id: 82,
        activityName: 'Public Speaking 1',
        category: 'Public Speaking',
        date: '14-May-2025',
      },
      {
        id: 83,
        activityName: 'Training Session 1',
        category: 'Public Speaking',
        date: '11-May-2025',
      },
      {
        id: 84,
        activityName: 'Documentation 1',
        category: 'Public Speaking',
        date: '08-May-2025',
      },
      {
        id: 85,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '04-May-2025',
      },
    ],
  },
];

// Build activities array from employees' defined activities with memberId, year, and quarter
export const activities = buildActivities(employees);
