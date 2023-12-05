import Skills from "./skills";
import {render, screen, logRoles} from '@testing-library/react'

describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    test('render correctly', () => {
        render(<Skills/>)
        
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    });

    test('render list with element', () => {
        render(<Skills skills={skills} />)

        const listItemElement = screen.getAllByRole('listitem')
        expect(listItemElement).toHaveLength(skills.length)
    })

    test('render the login button', () => {
        render(<Skills/>)
        const loginButton = screen.getByRole('button', {name : 'Login'});
        expect(loginButton).toBeInTheDocument();
    })

    test('start learning not to be render', () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole('button', {name:'Start Learning'});
        expect(startLearningButton).not.toBeInTheDocument();
    })

    test('Start learning render eventually display', async () => {
        const view = render(<Skills skills={skills} />)
        // logRoles(view.container)
        // screen.debug()
        const startLearningButton = await screen.findByRole('button', {name : 'Start Learning'}, {timeout: 2000});
        // screen.debug()
        expect(startLearningButton).toBeInTheDocument();
    })
})