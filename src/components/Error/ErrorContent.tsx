import ErrorIcon from "@mui/icons-material/Error";
import { Typography, Box, styled } from "@mui/material";

const Error = styled(ErrorIcon)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

const ErrorContent = () => {
  return (
    <Container>
      <Error />
      <Text>404 PAGE NOT FOUND</Text>
    </Container>
  );
};

export default ErrorContent;
