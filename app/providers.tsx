
'use client';

import { SWRConfig } from 'swr';
import { globalFetcher, ApiError } from '@/app/lib/fetcher';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher: globalFetcher,
        onError: (error: ApiError, key: string) => {
          // TypeScript now knows `error` has a `status` and `message`
          if (error.status !== 401 && error.status !== 404) {
            console.error(`[SWR Error] on ${key}:`, error.message);
            // toast.error(`Error: ${error.message}`);
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}