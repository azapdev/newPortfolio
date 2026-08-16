import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldErrors<T>;
  type?: string;
};

const Input = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  type,
}: InputProps<T>) => {
  const errorMessage = error?.[name]?.message as string | undefined;
  return (
    <div className="relative">
      <input
        id={name}
        {...register(name)}
        name={name}
        type={type}
        placeholder=" "
        className="peer w-full px-5 pt-6 pb-2 rounded-2xl border border-borderLight bg-white/95 text-textPrimary placeholder-transparent focus:outline-none focus:border-accentPrimary focus:ring-2 focus:ring-accentPrimary/20 transition-all font-medium text-sm"
      />
      <label
        htmlFor={name}
        className="absolute left-5 top-4 text-xs font-semibold text-textSecondary uppercase tracking-wider transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-textSecondary/60 peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accentPrimary peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-accentPrimary peer-[:not(:placeholder-shown)]:uppercase"
      >
        {label}
      </label>
      {errorMessage && (
        <span className="text-xs text-red-500 px-2 font-medium">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
