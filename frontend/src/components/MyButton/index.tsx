import React from "react";
import Button from "@mui/material/Button";
interface MyButtonProps {
  label: string;
  variant: "text" | "outlined" | "contained";
  [key: string]: any; // This allows for additional props not explicitly defined
}
export const MyButton: React.FC<MyButtonProps> = ({
  label,
  variant,
  ...props
}) => {
  return (
    <Button variant={variant} {...props}>
      {label}
    </Button>
  );
};
