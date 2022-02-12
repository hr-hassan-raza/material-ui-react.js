import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { Container } from "@mui/material";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@material-ui/styles"; // a function
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);
  const [titleError, setTitleError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailsError(false);
    setTitleError(false);
    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details);
    }
  };
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
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            className={classes.field}
            label="Details"
            variant="outlined"
            color="secondary"
            multiline // multi line
            rows={4} // how many rows
            fullWidth
            required
            error={detailsError}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<SendIcon>adadawd</SendIcon>}
          >
            Submit
          </Button>
        </form>

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

        {/* icons */}
        {/* <br />
        <AcUnitOutlinedIcon
          color="secondary"
          fontSize="large"
        ></AcUnitOutlinedIcon>
        <AcUnitOutlinedIcon
          color="disabled"
          fontSize="small"
        ></AcUnitOutlinedIcon>
        <AcUnitOutlinedIcon
          color="action"
          fontSize="small"
        ></AcUnitOutlinedIcon>
        <AcUnitOutlinedIcon color="error" fontSize="small"></AcUnitOutlinedIcon> */}
      </div>
    </Container>
  );
}

// Theme in MUI is bit like gaint object
