import classnames from "classnames";

function calcTransform(
  size: number,
  position: "center" | "top" | "left" | "right"
): string {
  const ratio = 1 / 3.33;

  switch (position) {
    case "center":
      return "translate(-2.5px, -1px)";
    case "top":
      return `translateY(-${size * ratio}px)`;
    case "left":
      return `translate(${size * ratio}px, ${size * ratio}px)`;
    case "right":
      return `translate(-${size * ratio}px, ${size * ratio}px)`;
  }
}

function Ring({
  className,
  position,
  size = 20,
}: {
  className?: string;
  position: "center" | "top" | "left" | "right";
  size?: number;
}) {
  return (
    <div
      className={classnames("rounded-full border-amber-500", className)}
      style={{
        borderWidth: Math.min(size / 10, 2),
        width: size,
        height: size,
        transformOrigin: "center",
        transform: calcTransform(size, position),
      }}
    ></div>
  );
}

export function EldenRingLogo() {
  const size = 30;

  return (
    <div className="relative h-[35px] w-[35px]">
      <span className="sr-only">Elden Ring Logo</span>
      <Ring
        className="absolute"
        size={size + (size / 20) * 3}
        position="center"
      />
      <Ring className="absolute" size={size} position="top" />
      <Ring className="absolute" size={size} position="left" />
      <Ring className="absolute" size={size} position="right" />
    </div>
  );
}
