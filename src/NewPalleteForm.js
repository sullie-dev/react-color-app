import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import DraggableColorBox from "./DraggableColorBox";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorColorUnique", (value) =>
      colors.every(({ color }) => color !== currColor)
    );
    ValidatorForm.addValidationRule("isPalleteNameUnique", (value) =>
      props.palletes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [currColor, setCurrColor] = useState("#7F4141");
  const [colors, setColors] = useState([]);
  const [colorName, setColorName] = useState("");
  const [newPalleteName, setNewPalleteName] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addCurrColor = (newColor) => {
    setCurrColor(newColor);
  };
  const addColor = () => {
    setColors((colors) => [...colors, { name: colorName, color: currColor }]);
    setColorName("");
    setCurrColor("#fff");
  };
  const handleChange = (e) => {
    // e.target.name(e.target.value)
    if (e.target.name == "setColorName") {
      setColorName(e.target.value);
    } else {
      setNewPalleteName(e.target.value);
    }
  };

  const handleSubmit = () => {
    const newPallete = {
      paletteName: newPalleteName,
      id: newPalleteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
    };
    props.savePallete(newPallete);
    props.history.push("/");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              name="setNewPalleteName"
              label="Pallete Name"
              value={newPalleteName}
              onChange={handleChange}
              validators={[
                "required",
                "isPalleteNameUnique",
              ]}
              errorMessages={[
                "Pallete Name is required",
                "Pallete name is not unique",
              ]}
            />
            <Button type="submit" variant="contained" color="primary">
              Save Pallete
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">New color</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Pallete
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>

        <ChromePicker
          color={currColor}
          // onChange={(newColor) => addCurrColor(newColor.hex)}
          onChangeComplete={(newColor) => addCurrColor(newColor.hex)}
        />
        <ValidatorForm onSubmit={addColor}>
          <TextValidator
            name="setColorName"
            value={colorName}
            onChange={handleChange}
            validators={["required", "isColorNameUnique", "isColorColorUnique"]}
            errorMessages={[
              "Color name is required",
              "Color name is not unique",
              "Color already used",
            ]}
          />
          <Button type="submit" variant="contained" color="primary">
            Add color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {colors.map((c) => (
          <DraggableColorBox color={c.color} name={c.name} />
        ))}
      </main>
    </div>
  );
}
