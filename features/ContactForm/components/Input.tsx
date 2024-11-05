import { cn } from '@/lib/utils';

export default function Input({ containerClassName, className, label, error, ...props }: FormInputProps) {
  return (
    <div className={cn('flex flex-col gap-2 bg-inherit', containerClassName)}>
      <label htmlFor={props.name} className="text-lg font-medium">
        {label}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        className={cn(
          'border-b-2 border-main-400 bg-inherit text-lg transition-colors duration-300 ease-in-out hover:border-main-500 focus:border-main-800 focus:outline-none',
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
