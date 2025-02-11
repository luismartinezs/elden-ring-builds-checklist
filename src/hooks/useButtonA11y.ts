import { useCallback, KeyboardEvent } from 'react';

interface UseButtonA11yProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isPressed?: boolean;
}

interface UseButtonA11yReturn {
  buttonProps: {
    role: 'button';
    'aria-disabled': boolean;
    'aria-pressed'?: boolean;
    onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
    tabIndex: number;
  };
}

/**
 * Hook to handle button accessibility features including keyboard interactions
 * and ARIA attributes
 */
export const useButtonA11y = ({
  onClick,
  disabled = false,
  isPressed,
}: UseButtonA11yProps): UseButtonA11yReturn => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;

      // Handle both Enter and Space for button activation
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>);
      }
    },
    [onClick, disabled]
  );

  return {
    buttonProps: {
      role: 'button',
      'aria-disabled': disabled,
      ...(typeof isPressed !== 'undefined' && { 'aria-pressed': isPressed }),
      onKeyDown: handleKeyDown,
      tabIndex: disabled ? -1 : 0,
    },
  };
};