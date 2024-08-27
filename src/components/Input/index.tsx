import { forwardRef, useCallback } from "react";
import "./index.css";
import type { TextFieldProps } from "./types";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      id,
      testId,
      value,
      placeholder,
      endAdornment,
      max,
      name,
      maxLength,
      label,
      type = "text",
      onChange,
    } = props;

    const handleOnChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
      },
      [onChange]
    );

    return (
      <div>
        {label && <div className="label">{label}</div>}
        <div className="container-text-field">
          <div style={{ flex: 1 }}>
            <input
              ref={ref}
              data-testid={testId}
              type={type}
              name={name}
              id={id}
              value={value}
              placeholder={placeholder}
              max={max}
              maxLength={maxLength}
              onChange={handleOnChange}
            />
          </div>

          {endAdornment && (
            <div className="endAdornment">{endAdornment}</div>
          )}
        </div>
      </div>
    );
  }
);
