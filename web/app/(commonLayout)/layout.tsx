import type { ReactNode } from 'react'
import ClientLayout from './client-layout'
import GA, { GaType } from '@/app/components/base/ga'

export const metadata = {
  title: 'Tiby',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <GA gaType={GaType.admin} />
      <ClientLayout>{children}</ClientLayout>
    </>
  )
}
