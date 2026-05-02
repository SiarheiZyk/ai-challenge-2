import { getMemberActivities } from '../utils/dataUtils';

export default function MembersList({ members, expandedMemberId, onExpandMember }) {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <tbody>
            {members.map((member, index) => (
              <div key={member.id}>
                <div
                  onClick={() => onExpandMember(expandedMemberId === member.id ? null : member.id)}
                  className='flex items-center gap-4 p-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition'
                >
                  <div className='text-lg font-bold text-gray-400 w-8 text-center'>{index + 1}</div>
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                    className='w-12 h-12 rounded-full'
                  />
                  <div className='flex-1'>
                    <h4 className='font-semibold text-gray-900'>{member.name}</h4>
                    <p className='text-sm text-gray-600'>{member.title}</p>
                  </div>
                  <div className='flex items-center gap-6'>
                    <div className='text-right'>
                      <div className='text-2xl font-bold text-blue-500'>⭐ {member.score}</div>
                      <div className='text-xs text-gray-500'>
                        {member.totalContributions} contributions
                      </div>
                    </div>
                    <div className='text-gray-400'>
                      {expandedMemberId === member.id ? '▲' : '▼'}
                    </div>
                  </div>
                </div>

                {/* Expandable member details */}
                {expandedMemberId === member.id && (
                  <MemberDetail memberId={member.id} memberName={member.name} />
                )}
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MemberDetail({ memberId, memberName }) {
  const memberActivities = getMemberActivities(memberId);

  return (
    <div className='bg-gray-50 border-t border-gray-200 p-6'>
      <h5 className='font-semibold text-gray-900 mb-4 text-sm uppercase text-gray-600'>
        Recent Activity
      </h5>
      <div className='overflow-x-auto'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b border-gray-300'>
              <th className='text-left py-2 px-3 font-semibold text-gray-700'>Activity</th>
              <th className='text-left py-2 px-3 font-semibold text-gray-700'>Category</th>
              <th className='text-left py-2 px-3 font-semibold text-gray-700'>Date</th>
              <th className='text-left py-2 px-3 font-semibold text-gray-700'>Points</th>
            </tr>
          </thead>
          <tbody>
            {memberActivities.length > 0 ? (
              memberActivities
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((activity) => (
                  <tr
                    key={activity.id}
                    className='border-b border-gray-200 hover:bg-white transition'
                  >
                    <td className='py-3 px-3 text-gray-800'>{activity.activityName}</td>
                    <td className='py-3 px-3'>
                      <span className='inline-block px-3 py-1 bg-gray-300 text-gray-700 rounded-full text-xs font-medium'>
                        {activity.category}
                      </span>
                    </td>
                    <td className='py-3 px-3 text-gray-600'>{activity.date}</td>
                    <td className='py-3 px-3 font-semibold text-blue-500'>+{activity.points}</td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan='4' className='py-4 px-3 text-center text-gray-500'>
                  No activities found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
