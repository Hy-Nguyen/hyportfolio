'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="w-full text-green-700 disabled:text-red-700"
    >
      Create {pending ? '...' : ''}
    </button>
  );
}
