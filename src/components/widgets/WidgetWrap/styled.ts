import { styled } from '@mui/system';
import { alpha } from '@mui/material/styles';
import { Paper, TextField } from '@mui/material';

export const PaperContainer = styled(Paper)`
  height: 100%;
  background-color: transparent;
`;

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme}) => alpha(theme.palette.background.paper, .6)};
  border-radius: ${({theme}) => theme.shape.borderRadius}px;
  overflow: hidden;
`;

export const Header = styled('div')`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme}) => theme.palette.secondary.main};
  color: ${({theme}) => theme.palette.getContrastText(theme.palette.secondary.main)}
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 .5rem;
  overflow-y: auto;
`;

export const StyledTextFiled = styled(TextField)`
  width: 100%;
  background-color: ${({theme}) => theme.palette.background.paper};
  border-radius: ${({theme}) => theme.shape.borderRadius}px;
`;
