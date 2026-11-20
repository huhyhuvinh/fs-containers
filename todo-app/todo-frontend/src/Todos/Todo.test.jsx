import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders todo text', () => {
    const todo = { text: 'Learn containers', done: false }
    render(<Todo todo={todo} onClickDelete={() => { }} onClickComplete={() => { }} />)
    expect(screen.getByText('Learn containers')).toBeDefined()
})
