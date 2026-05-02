export default function TopLeaders({ topThree }) {
  const medals = ['🥇', '🥈', '🥉'];
  const badgeColors = [
    'bg-yellow-100 ring-4 ring-yellow-400',
    'bg-gray-100 ring-4 ring-gray-400',
    'bg-orange-100 ring-4 ring-orange-400',
  ];
  const badgeTextColors = ['text-yellow-700', 'text-gray-700', 'text-orange-700'];

  return (
    <div className='mb-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-end'>
        {topThree.map((employee, index) => (
          <div
            key={employee.id}
            className={
              index === 0 ? 'md:col-span-3 md:flex md:justify-center md:items-end md:gap-6' : ''
            }
          >
            <div
              className={`${index === 0 ? 'md:order-2 md:flex-1' : index === 1 ? 'md:order-1 md:flex-1' : 'md:order-3 md:flex-1'} bg-white rounded-xl p-6 text-center shadow-lg ${index === 0 ? 'md:scale-110 md:mb-6' : ''}`}
            >
              <div className='flex justify-center mb-4'>
                <div
                  className={`relative w-24 h-24 ${badgeColors[index]} rounded-full flex items-center justify-center`}
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${employee.name}`}
                    alt={employee.name}
                    className='w-20 h-20 rounded-full'
                  />
                  <span className='absolute -bottom-2 -right-2 text-3xl'>{medals[index]}</span>
                </div>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-1'>{employee.name}</h3>
              <p className='text-gray-600 text-sm mb-3'>{employee.title}</p>
              <div
                className={`inline-block px-4 py-2 rounded-full font-bold text-lg ${badgeColors[index]} ${badgeTextColors[index]}`}
              >
                ⭐ {employee.score}
              </div>
              <div className={`mt-4 text-gray-600 text-sm`}>
                {employee.totalContributions} contributions
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
