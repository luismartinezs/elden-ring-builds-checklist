import { cn } from "~/utils/cn";

export function FormGroup(
  props: React.ComponentPropsWithoutRef<"div"> & {
    className?: string;
  }
) {
  const { className, ...propsWithoutClassname } = props;

  return (
    <div
      {...propsWithoutClassname}
      className={cn(className, "flex flex-col gap-2")}
    >
      {props.children}
    </div>
  );
}
