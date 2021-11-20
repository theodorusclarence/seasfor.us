export const defaultToastMessage = {
  loading: 'Loading...',
  success: 'Success',
  // you can type this with axios error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: (err: any) =>
    err?.response?.data?.msg ?? 'Something is wrong, please try again',
};
