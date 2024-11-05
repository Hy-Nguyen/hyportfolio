interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string[] | null;
  containerClassName?: string;
}
