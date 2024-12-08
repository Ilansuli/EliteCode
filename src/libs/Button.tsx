import { Button as MuiButton, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(MuiButton)`
  /* text */
  &.MuiButton-text {
    color: rgb(119 176 244);
    background-color: rgba(0, 0, 0, 0);
    &:hover {
      background-color: rgba(119, 176, 244, 0.7);
    }
    &:disabled {
      opacity: 0.25;
    }
  }

  /* contained */
  &.MuiButton-contained {
    color: white;
    background-color: rgb(119 176 244);
    &:hover {
      background-color: rgba(119, 176, 244, 0.7);
    }
    &:disabled {
      opacity: 0.25;
    }
  }

  /* outlined */
  &.MuiButton-outlined {
    color: rgb(119 176 244);
    border: 1px solid #6596d0;
    &:hover {
      background-color: rgba(119, 176, 244, 0.1);
      border: 1px solid rgb(119 176 244);
    }
    &:disabled {
      opacity: 0.25;
    }
  }
`;

// There's an issue with `sx` in the current version of @mui/material
const Button: React.FC<ButtonProps> = ({ sx, ...props }) => (
  <CustomButton sx={sx as any} {...props} />
);

export default Button;
