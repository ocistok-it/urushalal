
'use client';

import { SWRConfig } from 'swr';
import { globalFetcher, ApiError } from '@/app/lib/fetcher';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher: globalFetcher,
        onError: (error: ApiError, key: string) => {
          if (error.status !== 401 && error.status !== 404) {
            console.error(`[SWR Error] on ${key}:`, error.message);
          }
        },
        onErrorRetry(error: ApiError, key, config, revalidate, { retryCount }) {
            if (error.status === 401 || error.status === 404) {    
            return;
          }
          if (retryCount >= 3) {
            return;
          }
           setTimeout(() => revalidate({ retryCount }), 5000);
        }
        }}
    >
      {children}
    </SWRConfig>
  );
}