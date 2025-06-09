import Header from "./component/Header";
import Footer from "./component/Footer";
import { Box, Container } from "@mui/material";
import { useEffect } from "react";

function Layout(props) {
  const { header = true, footer = true, children } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Container sx={{ background: "#05012b" }}>
      <Box>
        {header && <Header />}
        <Box>{children}</Box>
        {footer && <Footer />}
      </Box>
    </Container>
  );
}

export default Layout;
