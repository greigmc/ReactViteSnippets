import { Box, Paper, Stack, Container, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      <h2 className="my-4">Material UI Stack Examples</h2>
      <p>
        The Stack component acts as a generic container, wrapping around the
        elements to be arranged.
      </p>
      <Container
        sx={{
          my: 4,
        }}
      >
        <Stack spacing={2}>
          <Item
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            Item 1
          </Item>
          <Item
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            Item 2
          </Item>
          <Item
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            Item 3
          </Item>
        </Stack>
      </Container>
      {/* direction row */}

      <Container
        sx={{
          my: 4,
        }}
      >
        <h4>Direction</h4>
        <p>
          By default, Stack arranges items vertically in a column. Use the
          direction prop to position items horizontally in a row:
        </p>

        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{
            justifyContent: "center",
          }}
        >
          <Item
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            Item 1
          </Item>
          <Item
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            Item 2
          </Item>
          <Item
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            Item 3
          </Item>
        </Stack>
      </Container>
    </Box>
  );
}
