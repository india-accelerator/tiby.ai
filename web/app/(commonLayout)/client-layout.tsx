'use client'
import React from 'react'
import type { ReactNode } from 'react'
import { useBoolean } from 'ahooks'
import SwrInitor from '@/app/components/swr-initor'
import { AppContextProvider } from '@/context/app-context'
import HeaderWrapper from '@/app/components/header/header-wrapper'
import Header from '@/app/components/header'
import { EventEmitterContextProvider } from '@/context/event-emitter'
import { ProviderContextProvider } from '@/context/provider-context'
import { ModalContextProvider } from '@/context/modal-context'

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, { toggle }] = useBoolean(false)

  return (
    <SwrInitor>
      <AppContextProvider>
        <EventEmitterContextProvider>
          <ProviderContextProvider>
            <ModalContextProvider>
              <HeaderWrapper isCollapsed={isCollapsed}>
                <Header isCollapsed={isCollapsed} onToggle={toggle} />
              </HeaderWrapper>
              <div className={`
                relative flex flex-col overflow-y-auto bg-components-panel-bg shrink-0 h-0 grow
                transition-all duration-300
                ${isCollapsed ? 'ml-32' : 'ml-48'}
              `}>
                {children}
              </div>
            </ModalContextProvider>
          </ProviderContextProvider>
        </EventEmitterContextProvider>
      </AppContextProvider>
    </SwrInitor>
  )
}

export default ClientLayout
