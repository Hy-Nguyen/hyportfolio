'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="w-full rounded-md bg-main-700 py-1 text-lg font-medium text-white transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-main-400 disabled:text-black/50"
    >
      Send{pending ? 'ing...' : ''}
    </button>
  );
}
