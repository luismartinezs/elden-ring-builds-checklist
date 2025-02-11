import { forwardRef } from "react";
import { cn } from "~/utils/cn";
import { useButtonA11y } from "~/hooks/useButtonA11y";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "outline" | "danger" | "elden" | "muted" | "ranni" | "caelid";
  /**
   * Optional label for screen readers. Required when button only contains an icon.
   */
  'aria-label'?: string;
  /**
   * For toggle buttons, indicates whether the button is pressed
   */
  'aria-pressed'?: boolean;
  /**
   * Additional description for screen readers
   */
  'aria-describedby'?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      variant = "primary",
      disabled,
      onClick,
      'aria-label': ariaLabel,
      'aria-pressed': ariaPressed,
      'aria-describedby': ariaDescribedBy,
      ...otherProps
    } = props;

    const { buttonProps } = useButtonA11y({
      onClick,
      disabled,
      isPressed: ariaPressed,
    });

    const classes = cn(
      "sm:mb-2 sm:mr-2 rounded-lg px-2 py-2 sm:px-5 sm:py-2.5 text-sm font-medium focus:outline-none sm:focus:ring-4 focus:ring-2",
      {
        "bg-amber-500 text-black hover:bg-amber-600 focus:ring-amber-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-stone-500 disabled:text-black focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-offset-stone-900":
          variant === "primary",
        "text-amber-500 border sm:border-2 border-amber-500 hover:bg-amber-500 hover:text-black focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-amber-500 focus:ring-1 sm:focus:ring-2 focus:ring-offset-stone-900":
          variant === "outline",
        "text-red-500 border sm:border-2 border-red-500 hover:bg-red-500 hover:text-black focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-red-500 focus:ring-1 sm:focus:ring-2 focus:ring-offset-stone-900":
          variant === "danger",
        // elden variant should have a fancy gradient
        "bg-gradient-to-r from-amber-500 to-red-500 text-white hover:from-amber-600 hover:to-red-600 focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-amber-500 focus:ring-1 sm:focus:ring-2 focus:ring-offset-stone-900 text-black":
          variant === "elden",
        // variant muted (no border, no bg, no hover effect)
        "text-white": variant === "muted",
        // ranni
        "bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:from-sky-600 hover:to-blue-600 focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-sky-500 focus:ring-1 sm:focus:ring-2 focus:ring-offset-stone-900 text-black":
          variant === "ranni",
        // caelid: a vibrant red gradient
        "bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-700 focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-red-500 focus:ring-1 sm:focus:ring-2 focus:ring-offset-stone-900 text-black":
          variant === "caelid",
      },
      className,
      // Improved disabled state visibility
      disabled && "opacity-50 cursor-not-allowed ring-0 pointer-events-none"
    );

    // Ensure icon-only buttons have an aria-label
    if (!children && !ariaLabel) {
      console.warn('Button: Icon-only buttons must have an aria-label prop for accessibility');
    }

    return (
      <button
        {...otherProps}
        {...buttonProps}
        className={classes}
        ref={ref}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        onClick={!disabled ? onClick : undefined}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
