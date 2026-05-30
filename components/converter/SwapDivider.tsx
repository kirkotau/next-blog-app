export function SwapDivider() {
  return (
    <div className='flex justify-center' aria-hidden='true'>
      <div className='flex h-[clamp(2.25rem,6vw,3rem)] w-[clamp(2.25rem,6vw,3rem)] items-center justify-center rounded-full border border-line bg-surface-raised text-ink-faint shadow-sm'>
        <svg
          className='h-[clamp(0.875rem,2.5vw,1.25rem)] w-[clamp(0.875rem,2.5vw,1.25rem)]'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' />
        </svg>
      </div>
    </div>
  );
}
