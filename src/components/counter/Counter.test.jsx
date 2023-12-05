import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter component', () => {
    test.skip('render correctly', () => {
        render(<Counter />)
        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument();

        const incrementButton = screen.getByRole("button", {name : "Increment"});
        expect(incrementButton).toBeInTheDocument();
    })

    test.skip('render a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0');
    })

    test.skip('render a count of 1 after clicking on increment button', async () => {
        // user.setup();
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {name:'Increment'});
        await user.click(incrementButton);
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test.skip('render a count of 10 after clicking set button', async () => {
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton');
        await user.type(amountInput, '10');
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole('button', {name:'Set'});
        await user.click(setButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10');
    })

    test.skip('elements are focused in the right order', async () => {
        render(<Counter/>)
        const amountInput = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button', {name:'Set'})
        const incrementButton = screen.getByRole('button', {name:'Increment'})

        await user.tab();
        expect(incrementButton).toHaveFocus()
        await user.tab();
        expect(setButton).toHaveFocus()
        await user.tab();
        expect(amountInput).toHaveFocus()
    })
})