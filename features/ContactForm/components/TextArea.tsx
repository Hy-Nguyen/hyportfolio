import { cn } from '@/lib/utils';
import ErrorMessage from './ErrorMessage';
export default function TextArea({ containerClassName, className, label, error, ...props }: FormTextAreaProps) {
  return (
    <div className={cn('flex w-full flex-col bg-inherit', containerClassName)}>
      <label htmlFor={props.name} className="text-lg font-medium">
        {label}
      </label>
      <textarea
        type={props.type}
        id={props.name}
        name={props.name}
        className={cn(
          'max-h-[10lh] min-h-[5lh] resize-none rounded-md border-2 border-main-400 bg-inherit p-1 text-lg text-main-700 transition-colors duration-300 ease-in-out placeholder:text-main-600 placeholder:opacity-50 hover:border-main-500 focus:border-main-800 focus:outline-none',
          className
        )}
        {...props}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
}
