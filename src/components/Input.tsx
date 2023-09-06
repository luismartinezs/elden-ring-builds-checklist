import classnames from "classnames";

export function Input(props: React.ComponentPropsWithoutRef<"input">) {
  const { className, ...otherProps } = props;
  return (
    <input
      className={classnames(
        "rounded border border-stone-500 bg-stone-100/20 px-4 py-2 outline-2 outline-offset-2 outline-amber-400 focus:outline dark:text-stone-50 dark:placeholder-stone-300",
        className
      )}
      {...otherProps}
    />
  );
}
