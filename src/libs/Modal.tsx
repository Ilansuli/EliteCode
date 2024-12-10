import styled from "@emotion/styled";
import { Modal as MuiModal, ModalProps, Box as MuiBox } from "@mui/material";

const Box = styled(MuiBox)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 90%;
  max-width: 500px;
  min-width: 260px;
  box-shadow: 0px 4px 8px 2px rgba(9, 16, 21, 0.5),
    0px 8px 12px 4px rgba(9, 16, 21, 0.35);
  padding-block: 0.5rem;
  background-color: rgba(23, 23, 23, 1);
  color: rgba(119, 176, 244, 1);
`;
// There's an issue with `sx` in the current version of @mui/material
const Modal: React.FC<ModalProps> = ({ children, sx, ...props }) => (
  <MuiModal sx={sx as any} {...props}>
    <Box>{children}</Box>
  </MuiModal>
);
export default Modal;
