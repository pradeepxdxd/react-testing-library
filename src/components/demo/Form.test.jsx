import { render, screen, fireEvent, waitFor, configure } from '@testing-library/react'
import Form from './Form'

describe('Form', () => {
  test('form render correctly', () => {
    render(<Form />)
    const parentDiv = screen.getByTestId('parent-div')
    expect(parentDiv).toBeInTheDocument()

    const formHeadingElement = screen.getByRole('heading', {
      name: 'Job Applicattion Form'
    })
    expect(formHeadingElement).toBeInTheDocument()

    const formSectionElement = screen.getByRole('heading', { level: 2 })
    expect(formSectionElement).toBeInTheDocument()

    const iconElement = screen.getByAltText('user_icon')
    expect(iconElement).toBeInTheDocument()

    const paragraphElement = screen.getByText(
      'All fields are mandatory *********'
    )
    expect(paragraphElement).toBeInTheDocument()

    const inputElement1 = screen.getByRole('textbox', { name: 'Name:' })
    expect(inputElement1).toBeInTheDocument()

    const inputElement2 = screen.getByRole('textbox', { name: 'Last Name:' })
    expect(inputElement2).toBeInTheDocument()

    const inputElement3 = screen.getByRole('textbox', { name: 'Bio:' })
    expect(inputElement3).toBeInTheDocument()

    const inputElement4 = screen.getByRole('combobox', {
      name: 'Job Location:'
    })
    expect(inputElement4).toBeInTheDocument()

    const inputElement5 = screen.getByRole('checkbox', { checked: false })
    expect(inputElement5).toBeInTheDocument()

    const inputElement6 = screen.getByRole('textbox', { name: 'Email:' })
    expect(inputElement6).toBeInTheDocument()

    const inputElement7 = screen.getByRole('textbox', { name: 'Phone:' })
    expect(inputElement7).toBeInTheDocument()

    const spanElement = screen.getByTitle('check_1')
    expect(spanElement).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    expect(submitButton).toBeInTheDocument()
  })
})

describe('test submit form data', () => {
  const emailRegex = /^[a-zA-Z0-9._]{1,60}@([a-zA-Z]{1,10}\.){1,}[a-zA-Z]{2,3}$/
  const phoneRegex = /^[0-9]{10}$/
  test('submit form data with correct payload', async () => {

    jest.setTimeout(30000);
    const mockApiResponse = { success: true }
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockApiResponse)
    })

    render(<Form />)

    fireEvent.change(screen.getByLabelText('Name:'), {
      target: { value: 'Pradeep' }
    })
    const nameInputValue = screen.getByLabelText('Name:').value;
    expect(nameInputValue).not.toBe('');

    fireEvent.change(screen.getByLabelText('Last Name:'), {
      target: { value: 'Biswas' }
    })
    const lnameInputValue = screen.getByLabelText('Last Name:').value;
    expect(lnameInputValue).not.toBe('');

    fireEvent.change(screen.getByLabelText('Bio:'), {
      target: { value: 'Hello World' }
    })
    const bioInputValue = screen.getByLabelText('Bio:').value;
    expect(bioInputValue).not.toBe('');

    fireEvent.change(screen.getByLabelText('Email:'), {
      target: { value: 'pradeep23@gmail.com' }
    })
    const emailInputValue = screen.getByLabelText('Email:').value
    expect(emailInputValue).not.toBe('')
    expect(emailRegex.test(emailInputValue)).toBe(true)
    
    fireEvent.change(screen.getByLabelText('Phone:'), {
      target: { value: '9876532213' }
    })
    const phoneInputValue = screen.getByLabelText('Phone:').value
    expect(phoneInputValue).not.toBe('')
    expect(phoneRegex.test(phoneInputValue)).toBe(true)

    fireEvent.change(screen.getByLabelText('Job Location:'), {
      target: { value: 'Indore' }
    })
    const jobInputValue = screen.getByLabelText('Job Location:').value;
    expect(jobInputValue).not.toBe('');

    fireEvent.submit(screen.getByRole('button'))

    try{
      await waitFor(
        () => {
          expect(global.fetch).toHaveBeenLastCalledWith(
            'http://localhost:3004/form',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: {
                name: 'Pradeep',
                lname: 'Biswas',
                email : 'pradeep23@gmail.com',
                phone : '9876543213',
                bio: 'Hello World',
                job_loc: 'Indore'
              }
            }
          )
        },
        // { timeout: 1000 }
      ) // Adjust the timeout value if necessary
    }
    catch(err){
      // console.log(';;;;;;;;;;;', err)
    }
  })
})
