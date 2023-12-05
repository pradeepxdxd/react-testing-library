import Application from "./Application";
import {render, screen} from '@testing-library/react'

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application/>)

        const pageHeading = screen.getByRole('heading', {level:1});
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {level:2});
        expect(sectionHeading).toBeInTheDocument();

        const textElement = screen.getByRole('textbox', {name:'Name'});
        expect(textElement).toBeInTheDocument();

        const textElement2 = screen.getByLabelText('Name', {selector:"input"});
        expect(textElement2).toBeInTheDocument();

        const textElementPlaceHolder = screen.getByPlaceholderText('Enter Full Name');
        expect(textElementPlaceHolder).toBeInTheDocument();

        const textElement3 = screen.getByDisplayValue('Pradeep');
        expect(textElement3).toBeInTheDocument();

        const paraElement = screen.getByText('Get By Text Query');
        expect(paraElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {name:'Bio'});
        expect(bioElement).toBeInTheDocument();

        const customTestId = screen.getByTestId('custom-testid');
        expect(customTestId).toBeInTheDocument();

        const closingElement = screen.getByTitle('close');
        expect(closingElement).toBeInTheDocument();

        const imgElement = screen.getByAltText('laptop image');
        expect(imgElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).toBeInTheDocument();

        const checkboxElement2 = screen.getByLabelText('I agree to the terms and conditions');
        expect(checkboxElement2).toBeInTheDocument();

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
    })
})