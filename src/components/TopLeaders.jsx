const podiumConfig = {
  1: {
    profileOffset: 'md:translate-y-0',
    avatarSize: 'h-[120px] w-[120px]',
    avatarRing: 'border-[4px] border-[#efc63a] shadow-[0_6px_14px_rgba(0,0,0,0.16)]',
    badgeSize: 'h-10 w-10 text-[20px]',
    badgeBg: 'bg-[#f4c600] text-[#7a5a00] border-2 border-white shadow-[0_3px_8px_rgba(0,0,0,0.2)]',
    scorePill: 'bg-[#f4eab2] text-[#c49725] border border-[#e8d476]',
    scoreValueClass: 'text-[20px]',
    scoreStarClass: 'text-[18px]',
    block: 'h-44 md:h-52 bg-gradient-to-b from-[#f6e89e] to-[#f2df81] border border-[#ead36a]',
    blockShadow: 'shadow-[0_2px_0_rgba(203,177,76,0.45)_inset,0_1px_3px_rgba(120,112,74,0.18)]',
    numberColor: 'text-[#e4cb65]',
    numberSize: 'text-[112px]',
    nameClass: 'mb-1 text-[20px] leading-[23px] font-semibold text-[#0F172A]',
    titleClass: 'mb-2 text-[14px] leading-[17px] text-[#64748B]',
    blockGap: 'mt-2',
  },
  2: {
    profileOffset: 'md:translate-y-4',
    avatarSize: 'h-[88px] w-[88px]',
    avatarRing: 'border-[3px] border-white shadow-[0_4px_10px_rgba(72,93,122,0.16)]',
    badgeSize: 'h-8 w-8 text-[18px]',
    badgeBg: 'bg-[#94a3b8] text-white border-2 border-white shadow-[0_2px_6px_rgba(0,0,0,0.18)]',
    scorePill: 'bg-white text-[#41a6e6] border border-[#dbe3f1]',
    scoreValueClass: 'text-[18px]',
    scoreStarClass: 'text-[16px]',
    block: 'h-40 md:h-44 bg-gradient-to-b from-[#d7deea] to-[#ced7e5] border border-[#c1cbda]',
    blockShadow: 'shadow-[0_2px_0_rgba(166,177,196,0.45)_inset,0_1px_3px_rgba(93,107,131,0.16)]',
    numberColor: 'text-[#c2cbdb]',
    numberSize: 'text-[96px]',
    nameClass: 'mb-1 text-[20px] leading-[23px] font-semibold text-[#0F172A]',
    titleClass: 'mb-2 text-[14px] leading-[17px] text-[#64748B]',
    blockGap: 'mt-8',
  },
  3: {
    profileOffset: 'md:translate-y-4',
    avatarSize: 'h-[88px] w-[88px]',
    avatarRing: 'border-[3px] border-white shadow-[0_4px_10px_rgba(72,93,122,0.16)]',
    badgeSize: 'h-8 w-8 text-[18px]',
    badgeBg: 'bg-[#a34d14] text-white border-2 border-white shadow-[0_2px_6px_rgba(0,0,0,0.18)]',
    scorePill: 'bg-white text-[#41a6e6] border border-[#dbe3f1]',
    scoreValueClass: 'text-[18px]',
    scoreStarClass: 'text-[16px]',
    block: 'h-40 md:h-44 bg-gradient-to-b from-[#d7deea] to-[#ced7e5] border border-[#c1cbda]',
    blockShadow: 'shadow-[0_2px_0_rgba(166,177,196,0.45)_inset,0_1px_3px_rgba(93,107,131,0.16)]',
    numberColor: 'text-[#c2cbdb]',
    numberSize: 'text-[96px]',
    nameClass: 'mb-1 text-[20px] leading-[23px] font-semibold text-[#0F172A]',
    titleClass: 'mb-2 text-[14px] leading-[17px] text-[#64748B]',
    blockGap: 'mt-8',
  },
};

import { calculateMemberScore } from '../utils/dataUtils';

function WinnerCard({ employee, rank }) {
  const config = podiumConfig[rank];

  return (
    <div className='flex flex-col items-center'>
      <div className={`relative z-10 mb-2 text-center ${config.profileOffset}`}>
        <div
          className={`relative mx-auto mb-3 rounded-full ${config.avatarSize} ${config.avatarRing}`}
        >
          <img
            src={employee.avatar}
            alt={employee.name}
            className='h-full w-full rounded-full object-cover'
          />
          <div
            className={`absolute -bottom-1 -right-1 flex items-center justify-center rounded-full font-bold leading-none ${config.badgeSize} ${config.badgeBg}`}
          >
            {rank}
          </div>
        </div>

        <h3 className={config.nameClass}>{employee.name}</h3>
        <p className={config.titleClass}>{employee.title}</p>

        <div
          className={`mx-auto mt-3 inline-flex items-center gap-2 rounded-full px-5 py-2 font-bold leading-none ${config.scorePill}`}
        >
          <span className={config.scoreStarClass}>★</span>
          <span className={config.scoreValueClass}>{calculateMemberScore(employee.id)}</span>
        </div>
      </div>

      <div
        className={`relative z-0 w-full rounded-t-xl ${config.blockGap} ${config.block} ${config.blockShadow} ${rank === 1 ? 'md:w-[96%]' : 'md:w-[90%]'}`}
      >
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-[900] leading-none opacity-45 ${config.numberColor} ${config.numberSize}`}
        >
          {rank}
        </span>
      </div>
    </div>
  );
}

export default function TopLeaders({ topThree }) {
  if (!topThree || topThree.length === 0) {
    return null;
  }

  const first = topThree[0];
  const second = topThree[1];
  const third = topThree[2];

  return (
    <section className='mb-24'>
      <div className='grid grid-cols-1 items-end gap-6 md:grid-cols-3'>
        {second ? <WinnerCard employee={second} rank={2} /> : <div />}
        {first ? <WinnerCard employee={first} rank={1} /> : <div />}
        {third ? <WinnerCard employee={third} rank={3} /> : <div />}
      </div>
    </section>
  );
}
