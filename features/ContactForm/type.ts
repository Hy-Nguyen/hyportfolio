interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string[] | null;
  containerClassName?: string;
}
interface FormTextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string[] | null;
  containerClassName?: string;
}
