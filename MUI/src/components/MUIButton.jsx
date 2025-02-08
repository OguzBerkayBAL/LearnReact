import React from "react";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const MUIButton = () => {
  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <Button variant="text">Kaydol</Button>
        <Button variant="contained">Kaydol</Button>
        <Button variant="outlined">Kaydol</Button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Button color="primary">Giriş Yap</Button>
        <Button color="error">Giriş Yap</Button>
        <Button color="info">Giriş Yap</Button>
        <Button color="inherit">Giriş Yap</Button>
        <Button color="secondary" variant="contained">
          Giriş Yap
        </Button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Button size="small" variant="contained">
          Giriş Yap
        </Button>
        <Button size="medium" variant="contained">
          Giriş Yap
        </Button>
        <Button size="large" variant="contained">
          Giriş Yap
        </Button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Button startIcon={<AddCircleIcon />} variant="contained">
          Giriş Yap
        </Button>
        <Button endIcon={<AddCircleIcon />} variant="contained">
          Giriş Yap
        </Button>
      </div>
    </div>
  );
};

export default MUIButton;
