import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";

const Home = () => {
  const { locale } = useSelector(state => ({
    locale: state.app.locale,
  }));

  return (
    <>
      <Typography variant="h2" color="primary">
        Welcome to Razzle.
      </Typography>

      <Typography variant="h4" color="secondary">
        Locale: {locale}
      </Typography>

      <Link to="about">About</Link>
    </>
  );
};

export default Home;
