import classNames from "classnames";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "outline";
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
    "mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4",
    className,
    {
      "bg-amber-500 text-black hover:bg-amber-600 focus:ring-amber-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-stone-500 disabled:text-black":
        variant === "primary",
      "bg-transparent text-amber-500 border-2 border-amber-500 hover:bg-amber-500 hover:text-black focus:ring-offset-2 focus:ring-amber-500 focus:ring-2 focus:ring-offset-stone-900":
        variant === "outline",
    },
    disabled && "opacity-50 cursor-not-allowed"
  );

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
}
