import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { HiX } from 'react-icons/hi';

import DropzoneInput from '@/components/forms/DropzoneInput';
import TextArea from '@/components/forms/TextArea';

type PhotoFormModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PhotoFormModal({ open, setOpen }: PhotoFormModalProps) {
  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-30 overflow-y-auto'
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle layout sm:w-full sm:p-6'>
              <button
                type='button'
                className='block ml-auto text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                onClick={() => setOpen(false)}
              >
                <span className='sr-only'>Close</span>
                <HiX className='w-6 h-6' aria-hidden='true' />
              </button>
              <PhotoForm open={open} setOpen={setOpen} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function PhotoForm({ setOpen }: PhotoFormModalProps) {
  //#region  //*============== FORM
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*============== FORM

  //#region //*============== FORM SUBMIT
  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
    setOpen(false);
    return;
  };
  //#endregion //*============== FORM SUBMIT

  return (
    <div className='mt-2 md:grid md:grid-cols-3 md:gap-6'>
      <div className='md:col-span-1'>
        <div className='px-4 sm:px-0'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            Post your activity
          </h3>
          <p className='mt-1 text-sm text-gray-600'>
            This information will be displayed publicly, share your best
            photograph with awesome caption!
          </p>
        </div>
      </div>
      <div className='mt-5 md:mt-0 md:col-span-2'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className=''>
            <div className='shadow sm:rounded-md sm:overflow-hidden'>
              <div className='px-4 py-5 space-y-6 bg-white sm:p-6'>
                <DropzoneInput
                  id='photo'
                  label='Activity Photo'
                  validation={{ required: 'Photo must be filled' }}
                  accept='image/png, image/jpg, image/jpeg'
                  helperText='You can upload file with .png, .jpg, atau .jpeg extension.'
                />

                <TextArea
                  placeholder='#seasforus rocks!'
                  id='caption'
                  label='How was it?'
                  validation={{ required: 'Photo must be filled' }}
                  helperText='This caption will be shown on the post section.'
                />

                <p className='text-sm font-medium text-gray-600'>
                  We trust you that you{"'"}ve really help #teamseas clean up in
                  the beach!
                </p>
              </div>
              <div className='px-4 py-3 text-right bg-gray-50 sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
