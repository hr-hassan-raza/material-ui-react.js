import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import { ButtonGroup } from "@mui/material";
import { Container } from "@mui/material";

export default function Create() {
  return (
    <Container>
      <div>
        {/* <Typography variant="h1" color="primary" align="center">
        Create a New Note
      </Typography> */}
        {/* <Typography color="secondary" noWrap>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        molestie mattis rutrum. Praesent accumsan tellus in nunc pulvinar, ac
        tempor arcu luctus. Praesent sed velit a felis dictum vehicula. Etiam
        congue magna a urna mattis convallis. Nullam gravida diam id justo
        vestibulum, quis sodales elit sagittis. Phasellus augue neque, dignissim
        in lacus at, luctus venenatis nisi. Proin imperdiet eleifend arcu, at
        finibus mauris tempor id. Proin placerat, neque eget aliquet tincidunt,
        lorem massa finibus elit, ac faucibus elit odio in nulla. Praesent sed
        velit blandit, euismod nibh quis, molestie quam. Integer quis
        scelerisque neque. Morbi a eros in dolor euismod luctus. In hac
        habitasse platea dictumst. Nam quis facilisis elit. Pellentesque sed
        purus ornare ligula luctus commodo ut ac mi. Sed quis venenatis augue.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </Typography> */}
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create a new note
        </Typography>
        {/* <Button
        onClick={() => console.log("You clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button> */}
        {/* <Button type="submit" color="primary">
        Submit
      </Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
      </ButtonGroup> */}
      </div>
    </Container>
  );
}
