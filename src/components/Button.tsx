import classNames from "classnames";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "outline" | "danger";
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    disabled,
    ...otherProps
  } = props;

  const classes = classNames(
    "sm:mb-2 sm:mr-2 rounded-lg px-2 py-2 sm:px-5 sm:py-2.5 text-sm font-medium focus:outline-none sm:focus:ring-4 focus:ring-2",
    className,
    {
      "bg-amber-500 text-black hover:bg-amber-600 focus:ring-amber-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-stone-500 disabled:text-black":
        variant === "primary",
      "text-amber-500 border sm:border-2 border-amber-500 hover:bg-amber-500 hover:text-black focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-amber-500 focus:ring-1 sm:focus:ring-2 focus:ring-offset-stone-900":
        variant === "outline",
      "text-red-500 border sm:border-2 border-red-500 hover:bg-red-500 hover:text-black focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-red-500 focus:ring-1 sm:focus:ring-2 focus:ring-offset-stone-900":
        variant === "danger",
    },
    disabled && "opacity-50 cursor-not-allowed"
  );

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
}
