import { getMemberActivities } from '../utils/dataUtils';

export default function MembersList({ members, expandedMemberId, onExpandMember }) {
  return (
    <div className='space-y-4'>
      {members.map((member, index) => (
        <div
          key={member.id}
          className={`overflow-hidden rounded-2xl bg-white shadow-[0_1px_6px_rgba(95,113,141,0.14)] ${
            expandedMemberId === member.id ? 'border border-[#2ca7e0]' : 'border border-[#d6dde6]'
          }`}
        >
          <button
            type='button'
            onClick={() => onExpandMember(expandedMemberId === member.id ? null : member.id)}
            className='flex w-full items-center gap-5 px-6 py-5 text-left transition hover:bg-[#fbfcff]'
          >
            <div className='w-8 text-center text-[24px] font-[700] leading-none text-[#93a1b7]'>
              {index + 1}
            </div>

            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
              alt={member.name}
              className='h-14 w-14 rounded-full object-cover'
            />

            <div className='min-w-0 flex-1'>
              <h4 className='truncate text-[18px] font-[700] leading-[1.2] text-[#0f172a]'>
                {member.name}
              </h4>
              <p className='truncate text-[14px] leading-[17px] text-[#64748b]'>{member.title}</p>
            </div>

            <div className='hidden items-end gap-5 md:flex'>
              <ActivitySummary memberId={member.id} />

              <div className='h-10 w-px bg-[#e1e6ee]' />

              <div className='text-right'>
                <div className='text-[10px] font-[600] uppercase tracking-[0.12em] text-[#9aa6b8]'>
                  Total
                </div>
                <div className='mt-0.5 flex items-baseline justify-end gap-2 text-[#2ca7e0]'>
                  <span className='text-[28px] leading-none'>★</span>
                  <span className='text-[24px] font-[700] leading-none'>{member.score}</span>
                </div>
              </div>

              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f5fb] text-[#9fb0c6]'>
                <svg
                  className={`h-5 w-5 transition-transform ${expandedMemberId === member.id ? 'rotate-180' : ''}`}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 9l6 6 6-6'
                  />
                </svg>
              </div>
            </div>
          </button>

          {expandedMemberId === member.id && <MemberDetail memberId={member.id} />}
        </div>
      ))}
    </div>
  );
}

function ActivitySummary({ memberId }) {
  const memberActivities = getMemberActivities(memberId);
  const topCategories = getTopCategoryCounts(memberActivities).slice(0, 2);

  return (
    <div className='flex items-end gap-4'>
      {topCategories.map((item) => (
        <ActivityMetric key={item.category} category={item.category} count={item.count} />
      ))}
    </div>
  );
}

function ActivityMetric({ category, count }) {
  const icon = getCategoryIcon(category);

  return (
    <div className='flex flex-col items-center text-[#57abd9]'>
      <div className='group relative flex items-center justify-center'>
        {icon}

        <div className='pointer-events-none absolute bottom-full left-1/2 z-30 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-[2px] border border-[#d7dce3] bg-[#ebebed] px-3 py-1 text-[12px] font-normal leading-[1.2] text-[#111827] opacity-0 shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-opacity duration-100 group-hover:opacity-100'>
          {category}
        </div>
      </div>

      <span className='mt-0.5 text-[12px] font-[600] leading-none text-[#4b5563]'>{count}</span>
    </div>
  );
}

function getTopCategoryCounts(activities) {
  const counts = new Map();

  activities.forEach((activity) => {
    counts.set(activity.category, (counts.get(activity.category) || 0) + 1);
  });

  return Array.from(counts.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

function getCategoryIcon(category) {
  const normalized = category.toLowerCase();

  if (normalized.includes('code review')) {
    return (
      <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.8'
          d='M9 4L4 12l5 8M15 4l5 8-5 8'
        />
      </svg>
    );
  }

  if (normalized.includes('documentation')) {
    return (
      <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.8'
          d='M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z'
        />
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M14 3v5h5' />
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M9 13h6M9 17h4' />
      </svg>
    );
  }

  if (normalized.includes('bug')) {
    return (
      <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.8'
          d='M9 9h6v8a3 3 0 01-3 3 3 3 0 01-3-3V9z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.8'
          d='M10 9V7a2 2 0 114 0v2'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.8'
          d='M4 13h3m10 0h3M6 8l2 2m10-2l-2 2M6 18l2-2m10 2l-2-2'
        />
      </svg>
    );
  }

  if (normalized.includes('feature')) {
    return (
      <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M12 3v18M3 12h18' />
        <rect x='5' y='5' width='14' height='14' rx='2' strokeWidth='1.8' />
      </svg>
    );
  }

  if (normalized.includes('training') || normalized.includes('mentoring')) {
    return (
      <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.8'
          d='M12 4l9 5-9 5-9-5 9-5zm0 10v6m-6-8v5c0 1.2 2.7 3 6 3s6-1.8 6-3v-5'
        />
      </svg>
    );
  }

  if (normalized.includes('public') || normalized.includes('leadership')) {
    return (
      <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.8'
          d='M8 10l9-4v12l-9-4H4a1 1 0 01-1-1v-2a1 1 0 011-1h4z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.8'
          d='M18 9a3 3 0 010 6'
        />
      </svg>
    );
  }

  return (
    <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
      <rect x='3' y='4' width='18' height='12' rx='2' strokeWidth='1.8' />
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M8 20h8M12 16v4' />
    </svg>
  );
}

function MemberDetail({ memberId }) {
  const memberActivities = getMemberActivities(memberId);

  return (
    <div className='border-t border-[#dfe5ee] bg-[#f8fbff] px-6 py-5'>
      <h5 className='mb-5 text-[12px] font-[600] uppercase tracking-[0.08em] text-[#667085]'>
        Recent Activity
      </h5>

      {memberActivities.length > 0 ? (
        <div className='space-y-3'>
          {/* Table Header */}
          <div className='flex border-b border-[#d7dfeb] pb-3'>
            <div className='flex-1 text-[12px] font-[600] uppercase tracking-[0.08em] text-[#667085]'>
              Activity
            </div>
            <div className='w-52 text-left text-[12px] font-[600] uppercase tracking-[0.08em] text-[#667085]'>
              Category
            </div>
            <div className='w-32 text-left text-[12px] font-[600] uppercase tracking-[0.08em] text-[#667085]'>
              Date
            </div>
            <div className='w-20 text-right text-[12px] font-[600] uppercase tracking-[0.08em] text-[#667085]'>
              Points
            </div>
          </div>

          {/* Table Body */}
          {memberActivities
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((activity) => (
              <div
                key={activity.id}
                className='flex items-center py-3 hover:bg-white rounded-lg transition'
              >
                <div className='flex-1 text-[14px] font-[500] text-[#0f172a] break-words'>
                  {activity.activityName}
                </div>
                <div className='w-52 text-left'>
                  <span className='inline-block rounded-md bg-[#e9eef7] px-2 py-1 text-[12px] font-[500] text-[#52627c]'>
                    {activity.category}
                  </span>
                </div>
                <div className='w-32 text-left text-[14px] font-[500] text-[#64748b]'>
                  {activity.date}
                </div>
                <div className='w-20 text-right text-[14px] font-[600] text-[#2ca7e0]'>
                  +{activity.points}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className='py-6 text-center text-[14px] text-[#7d8aa1]'>No activities found</div>
      )}
    </div>
  );
}
