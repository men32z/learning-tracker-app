const subjectReducer = (subject = {}, { type, payload }) => {
  switch (type) {
    case 'MY_SUBJECTS_OK':
      return { ...subject, mySubjects: payload, myLoading: false };
    case 'MY_SUBJECTS_BAD':
      return { ...subject, myMessage: payload.message, myLoading: false };
    case 'MY_SUBJECTS_LOADING':
      return { ...subject, myLoading: true };
    case 'SUBJECTS_OK':
      return { ...subject, subjects: payload, loading: false };
    case 'SUBJECTS_BAD':
      return { ...subject, message: payload.message, loading: false };
    case 'SUBJECTS_LOADING':
      return { ...subject, loading: true };
    default:
      return subject;
  }
};
export default subjectReducer;
