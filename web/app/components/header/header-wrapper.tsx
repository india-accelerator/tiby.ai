'use client'
import { usePathname } from 'next/navigation'
import s from './index.module.css'
import classNames from '@/utils/classnames'

type HeaderWrapperProps = {
  children: React.ReactNode
  isCollapsed: boolean
}

const HeaderWrapper = ({ children, isCollapsed }: HeaderWrapperProps) => {
  const pathname = usePathname()
  const isBordered = ['/apps', '/datasets', '/datasets/create', '/tools'].includes(pathname)

  return (
    <div className={classNames(
      'fixed top-0 left-0 z-30 flex flex-col grow-0 shrink-0 basis-auto min-h-[56px] py-2',
      'transition-all duration-300',
      isCollapsed ? 'w-32' : 'w-48',
      s.header,
      isBordered ? 'border-r border-divider-regular' : '',
    )}>
      {children}
    </div>
  )
}

export default HeaderWrapper
