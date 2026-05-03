import { useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TopLeaders from './components/TopLeaders';
import MembersList from './components/MembersList';
import { getFilteredAndSortedEmployees, getTopThree } from './utils/dataUtils';
import { useFilters } from './context/FiltersContext';

function App() {
  const { filters } = useFilters();
  const [expandedMemberId, setExpandedMemberId] = useState(null);

  // Get filtered and sorted employees
  const filteredEmployees = getFilteredAndSortedEmployees(filters);

  // Get top 3 from filtered employees
  const topThree = getTopThree(filteredEmployees, filters);

  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4'>
      <div className='max-w-6xl mx-auto'>
        <Header />
        <FilterBar />

        {filteredEmployees.length > 0 ? (
          <>
            {topThree.length > 0 && <TopLeaders topThree={topThree} />}
            <MembersList
              members={filteredEmployees}
              expandedMemberId={expandedMemberId}
              onExpandMember={setExpandedMemberId}
            />
          </>
        ) : (
          <div className='text-center py-12 bg-white rounded-xl shadow-lg'>
            <p className='text-xl text-gray-600'>
              No employees found matching the selected filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
