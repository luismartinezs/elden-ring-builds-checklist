import { Tag } from "~/features/tags";

export const ChecklistLabel = ({
  description,
  tags = [],
}: {
  description: string;
  tags?: string[];
}) => (
  <div>
    <span
      className="inline-flex flex-wrap items-center gap-1"
      aria-hidden="true"
    >
      {[...tags].sort().map((tag) => (
        <span key={tag} className="!inline">
          <Tag tag={tag} />
        </span>
      ))}
    </span>{" "}
    <span
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: description }}
    ></span>
  </div>
);