import { Container, MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Theme } from "./styles/theme";
import Header from "./components/Header/Header";
import SearchVacanciesPage from "./components/SearchPage/SearchVacanciesPage";
import FavouritesPage from "./components/FavouritesPage/FavouritesPage";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={Theme}>
      <Container
        size="xl"
        px={162}
        mih="100vh"
        sx={(theme) => ({
          borderRadius: theme.radius.md,
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
