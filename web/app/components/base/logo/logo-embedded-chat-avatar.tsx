import type { FC } from 'react'
import { cn } from '@langgenius/dify-ui/cn'
import { TibyMark } from './tiby-mark'

type LogoEmbeddedChatAvatarProps = {
  className?: string
}
const LogoEmbeddedChatAvatar: FC<LogoEmbeddedChatAvatarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex size-10 items-center justify-center rounded-[11%] bg-[#1D74F5]',
        className,
      )}
    >
      <TibyMark variant="reversed" className="size-2/3" aria-label="Tiby" role="img" />
    </div>
  )
}

export default LogoEmbeddedChatAvatar
