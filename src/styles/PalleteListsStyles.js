export default {
    root: {
      backgroundColor: "blue",
      height: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    container: {
      width: "50%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap",
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      color: "white",
      alignItems:'center',
      color:'white',
      "& a":{
        textDecoration:'none',
        color:'white',
        transition: '0.6s',
      },
      "& a :after":{
        display: 'block',
        content: "",
        borderBottom: 'solid 3px white',
        transform: 'scaleX(0)',
        transition: "transform 250ms ease-in-out",
      },
      '& a :hover:after': {
        transform: 'scaleX(.1)',
      },
    },
    palletes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3,30%)",
      gridGap: "5%",
    },
  };