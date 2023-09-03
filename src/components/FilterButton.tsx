import classnames from "classnames";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Button, type ButtonProps } from "~/components/Button";
import { useFilter } from "~/hooks/useFilter";

export function FilterButton(
  props: ButtonProps & {
    filterTag: Parameters<typeof useFilter>[0];
    label: string;
  }
) {
  const { filterTag, label, className } = props;
  const { filter, setFilter } = useFilter(filterTag);

  return (
    <Button
      variant="outline"
      onClick={() => setFilter(!filter)}
      className={classnames("flex items-center gap-1", className)}
    >
      {filter ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
      {label}
    </Button>
  );
}
