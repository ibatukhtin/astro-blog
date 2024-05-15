import { type FeedbackInput, postFeedback } from './feedback.api';

export async function leaveFeedback(request: FeedbackInput) {
  await postFeedback(request)
}
