import { Typography, Box, styled } from "@mui/material";
import { ArchiveOutlined as Archive } from "@mui/icons-material";

const Light = styled(Archive)`
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

const EmptyArchive = () => {
  return (
    <Container>
      <Light />
      <Text>Your archived notes appear here</Text>
    </Container>
  );
};

export default EmptyArchive;
