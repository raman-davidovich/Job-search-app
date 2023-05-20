import { Global, Container, MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Theme } from "./styles/theme";
import Header from "./components/Header/Header";
import SearchVacanciesPage from "./components/SearchPage/SearchVacanciesPage";
import FavouritesPage from "./components/FavouritesPage/FavouritesPage";

function GlobalStyles() {
  return (
    <Global
      styles={(Theme) => ({
        ".pagination": {
          fontFamily: "Roboto, sans-serif",
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5rem",
          fontSize: "1.2rem",
          gap: "5px",

          "& .page-num": {
            padding: "8px 15px",
            cursor: "pointer",
            borderRadius: "3px",
            fontWeight: 400,

            "&:hover": {
              backgroundColor: Theme.colors.blue[4],
              color: Theme.colors.grey[4],
            },
          },

          "& .active-num": {
            backgroundColor: Theme.colors.blue[4],
          },
        },
        body: {
          backgroundColor: Theme.colors.grey[4],
        },
        Input: {
          "&:focus": {
            borderColor: Theme.colors.blue[4],
          },
        },
        Button: {
          "&:hover": {
            backgroundColor: Theme.colors.blue[3],
          },
          "&:active": {
            backgroundColor: Theme.colors.blue[5],
          },
        },
      })}
    />
  );
}

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={Theme}>
      <GlobalStyles />
      <Container
        mih="100vh"
        miw="100vw"
        p={0}
        sx={(theme) => ({
          borderRadius: theme.radius.md,
          backgroundColor: theme.colors.grey[2],
        })}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<SearchVacanciesPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </Router>
      </Container>
    </MantineProvider>
  );
};

export default App;
