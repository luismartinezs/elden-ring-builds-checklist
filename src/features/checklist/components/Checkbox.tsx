export const Checkbox = ({
  itemId,
  isChecked,
  onChange,
  label,
}: {
  itemId: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => (
  <input
    aria-label={label}
    type="checkbox"
    name={itemId}
    checked={isChecked}
    onChange={onChange}
    className="min-h-6 min-w-6 h-6 w-6 flex-shrink-0 rounded border-stone-300 bg-stone-100 text-amber-600 accent-amber-500 focus:ring-2 focus:ring-amber-500"
  />
);