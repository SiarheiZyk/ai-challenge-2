import { useEffect, useRef, useState } from 'react';
import { YEARS, QUARTERS, CATEGORIES } from '../data/mockData';
import { useFilters } from '../context/FiltersContext';

function Dropdown({ label, value, options, onSelect, widthClass, isOpen, onToggle, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={containerRef} className={`relative ${widthClass}`}>
      <button
        type='button'
        onClick={onToggle}
        className='flex h-10 w-full items-center justify-between rounded-none border border-slate-500 bg-[#ebebed] px-[8px] pr-[10px] text-[14px] text-black focus:outline-none'
      >
        <span className='overflow-hidden text-ellipsis whitespace-nowrap pr-[18px]'>{value}</span>
        <svg
          className='h-4 w-4 text-slate-700'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute left-0 top-full z-30 mt-1 w-full overflow-hidden rounded-none bg-[#ebebed] shadow-md'>
          {options.map((option) => (
            <button
              key={option}
              type='button'
              onClick={() => {
                onSelect(option);
                onClose();
              }}
              className={`flex h-8 w-full items-center gap-2 px-[8px] pr-[28px] text-left text-[14px] ${
                option === value
                  ? 'bg-[#dfe3e8] text-black'
                  : 'bg-[#ebebed] text-black hover:bg-[#e2e2e4]'
              }`}
            >
              <span className='w-3 text-black'>{option === value ? '✓' : ''}</span>
              <span className='block flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>
                {option}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FilterBar() {
  const { filters, setFilters } = useFilters();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);

  const yearOptions = ['All Years', ...YEARS];
  const quarterOptions = ['All Quarters', ...QUARTERS];
  const categoryOptions = ['All Categories', ...CATEGORIES];

  return (
    <div
      className='mb-8 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm'
      style={{ fontFamily: "'Segoe UI', 'Segoe UI Web', sans-serif" }}
    >
      <div className='flex flex-wrap items-center gap-3'>
        <Dropdown
          label='Year'
          value={filters.year}
          options={yearOptions}
          onSelect={(value) => handleChange('year', value)}
          widthClass='w-40'
          isOpen={openDropdown === 'year'}
          onToggle={() => toggleDropdown('year')}
          onClose={() => setOpenDropdown(null)}
        />

        <Dropdown
          label='Quarter'
          value={filters.quarter}
          options={quarterOptions}
          onSelect={(value) => handleChange('quarter', value)}
          widthClass='w-40'
          isOpen={openDropdown === 'quarter'}
          onToggle={() => toggleDropdown('quarter')}
          onClose={() => setOpenDropdown(null)}
        />

        <Dropdown
          label='Category'
          value={filters.category}
          options={categoryOptions}
          onSelect={(value) => handleChange('category', value)}
          widthClass='w-48'
          isOpen={openDropdown === 'category'}
          onToggle={() => toggleDropdown('category')}
          onClose={() => setOpenDropdown(null)}
        />

        <div className='relative min-w-80 flex-1'>
          <div className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-700'>
            <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
          <input
            type='text'
            placeholder='Search employee...'
            value={filters.searchTerm}
            onChange={(e) => handleChange('searchTerm', e.target.value)}
            className='h-10 w-full rounded-none border border-slate-500 bg-[#ebebed] pl-10 pr-[8px] text-[14px] text-black placeholder:text-slate-600 focus:border-slate-600 focus:outline-none'
          />
        </div>
      </div>
    </div>
  );
}
