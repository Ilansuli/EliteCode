import { Card as MuiCard, CardProps } from "@mui/material";
import { styled } from "@mui/system";

const CustomCard = styled(MuiCard)`
  &.MuiCard-root {
    background: var(--component-card-elevation-1);
    color: var(--system-common-body);
  }
`;

const Card: React.FC<CardProps> = ({ sx, ...props }) => (
  <CustomCard sx={sx as any} {...props} />
);

export default Card;
