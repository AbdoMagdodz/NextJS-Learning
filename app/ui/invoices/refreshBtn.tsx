'use client';

import { useRouter } from 'next/navigation';

export default function RefreshButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.refresh();
      }}
      className="h-10 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Refresh Page
    </button>
  );
}
