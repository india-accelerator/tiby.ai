import { render, screen } from '@testing-library/react'
import { TibyLogo } from '../tiby-logo'

describe('TibyLogo', () => {
  it('uses the provided alternative text as its accessible name', () => {
    const { rerender } = render(<TibyLogo alt="Tiby" />)

    expect(screen.getByRole('img', { name: 'Tiby' })).toBeInTheDocument()

    rerender(<TibyLogo alt="" />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
