const subjectReducer = (subject = {}, { type, payload }) => {
  switch (type) {
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
