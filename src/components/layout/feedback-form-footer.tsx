import { useState } from 'react';
import { useForm } from '@mantine/form';
import { leaveFeedback } from '@/lib/actions.ts';

const FeedbackFormFooter = () => {
  const form = useForm({
    initialValues: {
      email: '',
      name: 'Newsletter subscriber',
      message: 'Newsletter subscriber email',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const [leaveFeedbackError, setLeaveFeedbackError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const clearForm = () => {
    form.setFieldValue('name', 'Newsletter');
    form.setFieldValue('email', '')
    form.setFieldValue('message', 'Newsletter email')
  }

  const onSubmit = async () => {
    const validation = form.validate();
    if (validation.hasErrors) {
      clearForm();
      setIsError(true);
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
      setIsError(true);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='subscribe-form'>
      <input
        disabled={ isSuccess }
        placeholder={ isSuccess
          ? 'You’ve been successfully subscribed!'
          : isError ? 'Please, write a valid email address' : 'Type your email address' }
        { ...form.getInputProps('email') }
        className={ `tp-input ${isSuccess ? 'success' : isError ? 'error' : ''}` } />
      <button
        className={ `subscribe-form__button ${ isSuccess ? 'success' : '' }` }
        type='submit'
        onClick={ onSubmit }
      >
        { !isLoading &&
          <>
            <div className='bg'>
              <img
                src='/icons/send-email-btn.svg'
                width={ 56 }
                height={ 49 }
                className='subscribe-form__button-icon'
                alt='Subscribe to our Newsletters!'
              />
            </div>
          </>
        }
        { isLoading &&
          <img
            src='/icons/loader.svg'
            width={ 22 }
            height={ 22 }
            alt='Subscribe to our Newsletters!'
          />
        }
      </button>
    </div>
  )
}

export default FeedbackFormFooter;
