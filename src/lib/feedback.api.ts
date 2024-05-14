import {getRequestUrl} from "./backend.api";
import {RequestError} from "./request.error";

export interface FeedbackInput {
  name: string;
  email: string;
  message: string;
}

export const postFeedback = async (feedbackInput: FeedbackInput) => {
  const url = getRequestUrl(`/feedback/`);
  const response = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedbackInput)
    }
  );
  if (!response.ok) {
    throw RequestError.fromErrorCode(response.status);
  }

  return;
}
