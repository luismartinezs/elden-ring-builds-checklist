import classnames from "classnames";

export function FormGroup(
  props: React.ComponentPropsWithoutRef<"div"> & {
    className?: string;
  }
) {
  const { className, ...propsWithoutClassname } = props;

  return (
    <div
      {...propsWithoutClassname}
      className={classnames(className, "flex flex-col gap-2")}
    >
      {props.children}
    </div>
  );
}
