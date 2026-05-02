import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TopLeaders from './components/TopLeaders';
import MembersList from './components/MembersList';
import { getFilteredAndSortedEmployees, getTopThree } from './utils/dataUtils';

function App() {
  const [filters, setFilters] = useState({
    year: 'All Years',
    quarter: 'All Quarters',
    category: 'All Categories',
    searchTerm: '',
  });
  const [expandedMemberId, setExpandedMemberId] = useState(null);

  // Get filtered and sorted employees
  const filteredEmployees = getFilteredAndSortedEmployees(
    filters.year,
    filters.quarter,
    filters.category,
    filters.searchTerm,
  );

  // Get top 3 from filtered employees
  const topThree = getTopThree(filteredEmployees);

  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4'>
      <div className='max-w-6xl mx-auto'>
        <Header />
        <FilterBar onFiltersChange={setFilters} filters={filters} />

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
