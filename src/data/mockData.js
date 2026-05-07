// Mock data for the Leaderboard application

import { buildActivities } from '../utils/activityUtils';

// List of all years available for filtering
export const YEARS = ['2025', '2026'];

// List of all quarters available for filtering
export const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4'];

// Activity categories with label and points
const ACTIVITY_CATEGORIES = {
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
        date: '18-Feb-2025',
      },
      {
        id: 2,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '14-May-2025',
      },
      { id: 3, activityName: 'Bug Fix 1', category: 'Bug Fixing', date: '09-Aug-2025' },
      {
        id: 4,
        activityName: 'Team Leadership 1',
        category: 'Code Review',
        date: '21-Nov-2025',
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
        date: '11-Jan-2026',
      },
      {
        id: 6,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '22-Apr-2026',
      },
      {
        id: 7,
        activityName: 'Mentoring 1',
        category: 'Mentoring',
        date: '15-Jul-2026',
      },
      {
        id: 8,
        activityName: 'Documentation 1',
        category: 'Team Leadership',
        date: '03-Oct-2026',
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
        date: '18-Feb-2025',
      },
      {
        id: 10,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '14-May-2025',
      },
      {
        id: 11,
        activityName: 'Bug Fix 2',
        category: 'Bug Fixing',
        date: '09-Aug-2025',
      },
      {
        id: 12,
        activityName: 'Training Session 1',
        category: 'Code Review',
        date: '21-Nov-2025',
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
        date: '11-Jan-2026',
      },
      {
        id: 14,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '22-Apr-2026',
      },
      {
        id: 15,
        activityName: 'Team Leadership 1',
        category: 'Feature Development',
        date: '15-Jul-2026',
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
        date: '03-Oct-2026',
      },
      {
        id: 17,
        activityName: 'Public Speaking 1',
        category: 'Public Speaking',
        date: '18-Feb-2025',
      },
      {
        id: 18,
        activityName: 'Mentoring 1',
        category: 'Mentoring',
        date: '14-May-2025',
      },
      {
        id: 19,
        activityName: 'Training Session 1',
        category: 'Public Speaking',
        date: '09-Aug-2025',
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
        date: '21-Nov-2025',
      },
      {
        id: 21,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '11-Jan-2026',
      },
      {
        id: 22,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '22-Apr-2026',
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
        date: '15-Jul-2026',
      },
      {
        id: 24,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '03-Oct-2026',
      },
      {
        id: 25,
        activityName: 'Team Leadership 1',
        category: 'Feature Development',
        date: '18-Feb-2025',
      },
      {
        id: 26,
        activityName: 'Training 1',
        category: 'Code Review',
        date: '14-May-2025',
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
        date: '09-Aug-2025',
      },
      {
        id: 28,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '21-Nov-2025',
      },
      {
        id: 29,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '11-Jan-2026',
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
        date: '22-Apr-2026',
      },
      {
        id: 31,
        activityName: 'Team Leadership 1',
        category: 'Team Leadership',
        date: '15-Jul-2026',
      },
      {
        id: 32,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '03-Oct-2026',
      },
      {
        id: 33,
        activityName: 'Bug Fix 2',
        category: 'Bug Fixing',
        date: '18-Feb-2025',
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
        date: '14-May-2025',
      },
      {
        id: 35,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '09-Aug-2025',
      },
      {
        id: 36,
        activityName: 'Team Leadership 1',
        category: 'Team Leadership',
        date: '21-Nov-2025',
      },
      {
        id: 37,
        activityName: 'Mentoring 1',
        category: 'Code Review',
        date: '11-Jan-2026',
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
        date: '22-Apr-2026',
      },
      {
        id: 39,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '15-Jul-2026',
      },
      {
        id: 40,
        activityName: 'Training 1',
        category: 'Documentation',
        date: '03-Oct-2026',
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
        date: '18-Feb-2025',
      },
      {
        id: 42,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '14-May-2025',
      },
      {
        id: 43,
        activityName: 'Code Review 2',
        category: 'Code Review',
        date: '09-Aug-2025',
      },
      {
        id: 44,
        activityName: 'Documentation 1',
        category: 'Bug Fixing',
        date: '21-Nov-2025',
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
        date: '11-Jan-2026',
      },
      {
        id: 46,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '22-Apr-2026',
      },
      {
        id: 47,
        activityName: 'Mentoring 1',
        category: 'Mentoring',
        date: '15-Jul-2026',
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
        date: '03-Oct-2026',
      },
      {
        id: 49,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '18-Feb-2025',
      },
      {
        id: 50,
        activityName: 'Training Session 1',
        category: 'Feature Development',
        date: '14-May-2025',
      },
      {
        id: 51,
        activityName: 'Documentation 1',
        category: 'Code Review',
        date: '09-Aug-2025',
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
        date: '21-Nov-2025',
      },
      {
        id: 53,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '11-Jan-2026',
      },
      {
        id: 54,
        activityName: 'Documentation Update 1',
        category: 'Training',
        date: '22-Apr-2026',
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
        date: '15-Jul-2026',
      },
      {
        id: 56,
        activityName: 'Bug Fix 1',
        category: 'Bug Fixing',
        date: '03-Oct-2026',
      },
      {
        id: 57,
        activityName: 'Code Review 1',
        category: 'Feature Development',
        date: '18-Feb-2025',
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
        date: '14-May-2025',
      },
      {
        id: 59,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '09-Aug-2025',
      },
      {
        id: 60,
        activityName: 'Code Review 2',
        category: 'Code Review',
        date: '21-Nov-2025',
      },
      {
        id: 61,
        activityName: 'Bug Fix 1',
        category: 'Feature Development',
        date: '11-Jan-2026',
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
        date: '22-Apr-2026',
      },
      {
        id: 63,
        activityName: 'Documentation 1',
        category: 'Documentation',
        date: '15-Jul-2026',
      },
      {
        id: 64,
        activityName: 'Training Session 1',
        category: 'Bug Fixing',
        date: '03-Oct-2026',
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
        date: '18-Feb-2025',
      },
      {
        id: 66,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '14-May-2025',
      },
      {
        id: 67,
        activityName: 'Bug Fix 1',
        category: 'Code Review',
        date: '09-Aug-2025',
      },
      {
        id: 68,
        activityName: 'Training 1',
        category: 'Feature Development',
        date: '21-Nov-2025',
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
        date: '11-Jan-2026',
      },
      {
        id: 70,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '22-Apr-2026',
      },
      {
        id: 71,
        activityName: 'Bug Fix 1',
        category: 'Feature Development',
        date: '15-Jul-2026',
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
        date: '03-Oct-2026',
      },
      {
        id: 73,
        activityName: 'Feature Implementation 1',
        category: 'Feature Development',
        date: '18-Feb-2025',
      },
      {
        id: 74,
        activityName: 'Code Review 2',
        category: 'Code Review',
        date: '14-May-2025',
      },
      {
        id: 75,
        activityName: 'Bug Fix 1',
        category: 'Feature Development',
        date: '09-Aug-2025',
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
        date: '21-Nov-2025',
      },
      {
        id: 77,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '11-Jan-2026',
      },
      {
        id: 78,
        activityName: 'Training Session 1',
        category: 'Documentation',
        date: '22-Apr-2026',
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
        date: '15-Jul-2026',
      },
      {
        id: 80,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '03-Oct-2026',
      },
      {
        id: 81,
        activityName: 'Mentoring 1',
        category: 'Team Leadership',
        date: '18-Feb-2025',
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
        date: '09-Aug-2025',
      },
      {
        id: 84,
        activityName: 'Documentation 1',
        category: 'Public Speaking',
        date: '21-Nov-2025',
      },
      {
        id: 85,
        activityName: 'Code Review 1',
        category: 'Code Review',
        date: '11-Jan-2026',
      },
    ],
  },
];

// Build activities array from employees' defined activities with memberId, year, and quarter
export const activities = buildActivities(employees);
