import { Typography, Box, styled } from "@mui/material";
import { DeleteOutlineOutlined as Delete } from "@mui/icons-material";

const Light = styled(Delete)`
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

const EmptyDeleted = () => {
  return (
    <Container>
      <Light />
      <Text>No Notes in Trash</Text>
    </Container>
  );
};

export default EmptyDeleted;
