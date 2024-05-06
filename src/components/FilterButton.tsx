import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Button, type ButtonProps } from "~/components/Button";
import { type TTagKeys, tags } from "~/features/tags";
import { useFilter } from "~/hooks/useFilter";
import { cn } from "~/utils/cn";

export function FilterButton(
  props: ButtonProps & {
    filterTag: Parameters<typeof useFilter>[0];
    label?: string;
    hideLabel?: boolean;
  }
) {
  const { filterTag, label, className, hideLabel } = props;
  const { filter, setFilter } = useFilter(filterTag);
  const filterClasses = filter ? "bg-stone-700" : "bg-black";

  if (filterTag in tags) {
    const { buttonClasses, label: tagLabel } = tags[filterTag as TTagKeys];

    return (
      <Button
        variant="outline"
        onClick={() => setFilter(!filter)}
        className={cn(
          "flex items-center gap-1",
          buttonClasses,
          filterClasses
        )}
      >
        {filter ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
        {hideLabel ?? tagLabel}
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={() => setFilter(!filter)}
      className={cn(
        "flex items-center gap-1",
        className,
        filterClasses
      )}
    >
      {filter ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
      {hideLabel ?? label}
    </Button>
  );
}
