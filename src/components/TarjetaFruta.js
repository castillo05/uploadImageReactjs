import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    minWidth: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    width: 500,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    padding: 15,
  },
}));
const TarjetaFruta = (props) => {
  const { name } = props;
  const [cantidad, setCantidad] = useState(0);
  const classes = useStyles();

  const agregar = () => {
    try {
      setCantidad(cantidad + 1);
    } catch (err) {
      console.log(err);
    }
  };
  const quitar = () => {
    try {
      setCantidad(cantidad - 1);
    } catch (err) {
      console.log(err);
    }
  };
  const limpiar = () => {
    try {
      setCantidad(0);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.container}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {name}
            <p>Cantidad: {cantidad}</p>
          </Typography>
          <Typography variant="h5" component="h2"></Typography>
          <Button onClick={quitar} variant="contained" color="secondary">
            -
          </Button>
          <Button onClick={agregar} variant="contained" color="primary">
            +
          </Button>
          <Button onClick={limpiar} variant="contained" color="default">
            Limpiar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TarjetaFruta;
