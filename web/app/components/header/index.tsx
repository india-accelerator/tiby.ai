'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import { useContextSelector } from 'use-context-selector'
import HeaderBillingBtn from '../billing/header-billing-btn'
import AccountDropdown from './account-dropdown'
import AppNav from './app-nav'
import DatasetNav from './dataset-nav'
import EnvNav from './env-nav'
import ExploreNav from './explore-nav'
import ToolsNav from './tools-nav'
import LicenseNav from './license-env'
import { WorkspaceProvider } from '@/context/workspace-context'
import AppContext, { useAppContext } from '@/context/app-context'
import LogoSite from '@/app/components/base/logo/logo-site'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'
import { useProviderContext } from '@/context/provider-context'
import { useModalContext } from '@/context/modal-context'

type HeaderProps = {
  isCollapsed: boolean
  onToggle: () => void
}

const Header = ({ isCollapsed, onToggle }: HeaderProps) => {
  const { isCurrentWorkspaceEditor, isCurrentWorkspaceDatasetOperator } = useAppContext()
  const systemFeatures = useContextSelector(AppContext, v => v.systemFeatures)
  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile
  const { enableBilling, plan } = useProviderContext()
  const { setShowPricingModal, setShowAccountSettingModal } = useModalContext()
  const isFreePlan = plan.type === 'sandbox'

  const handlePlanClick = useCallback(() => {
    if (isFreePlan)
      setShowPricingModal()
    else
      setShowAccountSettingModal({ payload: 'billing' })
  }, [isFreePlan, setShowAccountSettingModal, setShowPricingModal])

  return (
    <aside className={`
      flex flex-col h-screen bg-background-body
      ${isCollapsed ? 'w-32' : 'w-48'}
      transition-all duration-300
      relative
      border-r border-gray-200
    `}>
      {/* Header Section */}
      <div className='h-14 flex items-center justify-between border-b border-gray-100'>
        <div className='flex items-center justify-between w-full gap-2 border-b p-2'>

          <div className='h-[52px]'>
            <Link href="/apps" className='flex items-center'>
              <LogoSite className='object-contain' />
            </Link>
          </div>

          {/* {isCollapsed ? "" : <button
            onClick={onToggle}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
              <ChevronLeftIcon className="w-4 h-4 text-gray-500" />

          </button>} */}
        </div>
      </div>

      {/* Navigation Section */}
      <nav className={`
        flex flex-col gap-3 px-4 py-4
        ${isCollapsed ? 'items-center' : ''}
      `}>
        {!isCurrentWorkspaceDatasetOperator && (
          <>
            <ExploreNav className={`
              flex items-center relative h-8 rounded-xl font-medium text-sm cursor-pointer
              ${isCollapsed ? 'justify-center w-8 px-0' : 'px-3 mr-3'}
            `} />
            <AppNav />
          </>
        )}
        {(isCurrentWorkspaceEditor || isCurrentWorkspaceDatasetOperator) && (
          <DatasetNav />
        )}
        {!isCurrentWorkspaceDatasetOperator && (
          <ToolsNav className={`
            flex items-center relative h-8 rounded-xl font-medium text-sm cursor-pointer
            ${isCollapsed ? 'justify-center w-8 px-0' : 'px-3 mr-3'}
          `} />
        )}
      </nav>

      {/* Footer Section */}
      <div className={`
        mt-auto px-4 py-4 border-t border-gray-100
        ${isCollapsed ? 'flex flex-col items-center' : ''}
      `}>
        <div className='space-y-3'>
          <LicenseNav />
          <EnvNav />
          {enableBilling && (
            <div className={`${isCollapsed ? 'mx-auto' : 'mr-3'} select-none`}>
              <HeaderBillingBtn onClick={handlePlanClick} />
            </div>
          )}
          <WorkspaceProvider>
            <AccountDropdown isMobile={isMobile} />
          </WorkspaceProvider>
        </div>
      </div>
    </aside>
  )
}

export default Header
