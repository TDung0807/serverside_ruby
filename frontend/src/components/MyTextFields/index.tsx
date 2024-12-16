import React from "react";
import TextField from "@mui/material/TextField";

// Define the types for the props based on what TextField expects
interface MyTextFieldsProps {
  label: string;
  variant: "filled" | "outlined" | "standard";
  type?: string;
  [key: string]: any; // This allows for additional props not explicitly defined
}

export const MyTextFields: React.FC<MyTextFieldsProps> = ({
  label,
  variant = "filled",
  type,
  ...props
}) => {
  return <TextField label={label} variant={variant} type={type} {...props} />;
};
