import { useState } from 'react';
import { useForm } from '@mantine/form';
import { leaveFeedback } from '@/lib/actions.ts';
import '@/styles/feedback-form.styles.scss';

const FeedbackForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => value.length > 0 ? null : 'Name should be filled',
      message: (value) => value.length > 0 ? null : 'Message should be filled'
    },
  });

  const [leaveFeedbackError, setLeaveFeedbackError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const clearForm = () => {
    form.setFieldValue('name', '');
    form.setFieldValue('email', '')
    form.setFieldValue('message', '')
  }

  const onSubmit = async () => {
    const validation = form.validate();
    if (validation.hasErrors) {
      clearForm();
      setLeaveFeedbackError('Error leaving feedback..')
      return;
    }

    setIsLoading(true);
    setLeaveFeedbackError('');

    try {
      const name = form.values.name;
      const email = form.values.email;
      const message = form.values.message;

      const feedbackInput = {
        name,
        email,
        message
      }

      await leaveFeedback(feedbackInput)
      setIsSuccess(true);
      clearForm();
    } catch (e) {
      setLeaveFeedbackError('Error leaving feedback..')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='feedback-form'>
      <div className='feedback-form__wrapper'>
        <h2>Contact us</h2>
        <div className='feedback-form__grid'>
          <div>
            <div className='feedback-form__label'>Name</div>
            <input
              className='tp-input'
              placeholder='Your name' { ...form.getInputProps('name') } />
          </div>

          <div>
            <div className='feedback-form__label'>E-mail</div>
            <input
              className='tp-input'
              placeholder='your@email.com' { ...form.getInputProps('email') } />
          </div>

          <div>
            <div className='feedback-form__label'>Message</div>
            <textarea
              className='tp-input'
              style={ { height: '5rem' } }
              placeholder='Your message' { ...form.getInputProps('message') } />
          </div>

          <div className='feedback-form__button'>
            <button
              className={`${isLoading ? 'tp-button-outline' : 'tp-button-filled'} tp-button-md tp-button-with-arrow`}
              style={ { height: '42px', marginTop: '10px' } }
              type='submit'
              onClick={ onSubmit }
            >
              <div className='button-content'>
                { !isLoading &&
                  <div>Submit</div>
                }
                { isLoading &&
                  <img
                    src='/icons/loader.svg'
                    width={ 22 }
                    height={ 22 }
                    alt='Subscribe to our Newsletters!'
                  />
                }
              </div>
            </button>
          </div>
          <div className='feedback-form__message'>
            { leaveFeedbackError && <span style={ { color: 'red' } }>{ leaveFeedbackError }</span> }
            { isSuccess && <span style={ { color: 'green' } }>Data sent successfully</span> }
          </div>
        </div>
      </div>
    </div>
  )

}

export default FeedbackForm;
