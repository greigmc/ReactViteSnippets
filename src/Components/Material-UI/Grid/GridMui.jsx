import { Box, Grid, Container } from "@mui/material";

export default function BasicGrid() {
  return (
    <Box
      sx={{
        flexGrow: 4,
      }}
    >
      <Container>
        <h2 className="my-4">Material UI Grid-v2 Examples</h2>
        <p>
          The responsive layout grid adapts to screen size and orientation,
          ensuring consistency across layouts.
        </p>
        {/* One of One */}
        <Grid
          container
          spacing={2}
          sx={{
            my: 4,
            border: 1,
            borderColor: "error.main",
          }}
        >
          <Grid lg={12} md={12} sm={12} xs={12}>
            <h5>1 of 2</h5>
          </Grid>
        </Grid>
        {/* two of two */}
        <Grid
          container
          spacing={2}
          sx={{
            my: 4,
          }}
        >
          <Grid
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>1 of 1</h5>
          </Grid>
          <Grid
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>2 of 2</h5>
          </Grid>
        </Grid>
        {/* three of three */}
        <Grid
          container
          spacing={2}
          sx={{
            my: 4,
          }}
        >
          <Grid
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>1 of 3</h5>
          </Grid>
          <Grid
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>2 of 3</h5>
          </Grid>
          <Grid
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>2 of 3</h5>
          </Grid>
        </Grid>
        {/* four of four */}
        <Grid
          container
          spacing={2}
          sx={{
            my: 4,
          }}
        >
          <Grid
            lg={3}
            md={3}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>1 of 4</h5>
          </Grid>
          <Grid
            lg={3}
            md={3}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>2 of 4</h5>
          </Grid>
          <Grid
            lg={3}
            md={3}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>3 of 4</h5>
          </Grid>
          <Grid
            lg={3}
            md={3}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>4 of 4</h5>
          </Grid>
        </Grid>
        {/* three of three */}
        <Grid
          container
          spacing={2}
          sx={{
            my: 4,
          }}
        >
          <Grid
            lg={3}
            md={3}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>1 of 3</h5>
          </Grid>
          <Grid
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>2 of 3</h5>
          </Grid>
          <Grid
            lg={3}
            md={3}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>3 of 3</h5>
          </Grid>
        </Grid>
        {/* three of three */}
        <Grid
          container
          spacing={2}
          sx={{
            my: 4,
          }}
        >
          <Grid
            lg={2}
            md={2}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>1 of 3</h5>
          </Grid>
          <Grid
            lg={8}
            md={8}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>2 of 3</h5>
          </Grid>
          <Grid
            lg={2}
            md={2}
            sm={12}
            xs={12}
            sx={{
              border: 1,
              borderColor: "error.main",
            }}
          >
            <h5>3 of 3</h5>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
