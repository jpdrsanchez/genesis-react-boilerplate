import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('Should render correctly', () => {
    render(<Main />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /vite - react - typescript - eslint and prettier/i
      })
    ).toBeInTheDocument()
  })
})
