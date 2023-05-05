import { Theme } from "./styles/theme";
import { Button, Loader, MantineProvider, Text } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={Theme}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam
        incidunt excepturi inventore ea illo, quos id eveniet eligendi sunt
        omnis dolore dolorem fugiat beatae aliquid recusandae. Aperiam
        voluptatibus alias officia sint eveniet ab impedit distinctio nisi.
        Maiores culpa debitis rem, vero provident minima sunt dicta quod numquam
        adipisci? Ullam ducimus dolorum minima at quidem nulla impedit,
        reprehenderit itaque deserunt earum hic. Eos temporibus ipsam possimus
        veritatis quod, nesciunt rem eum tenetur excepturi sit? Possimus ad,
        quae non perferendis harum ab distinctio nam nesciunt. Architecto esse
        delectus laboriosam aperiam nobis? Amet, quisquam accusantium officiis
        accusamus natus illum iusto! Delectus, explicabo!
      </Text>
      <Button color="blue.5">Test</Button>
      <Loader color="blue.5" />
    </MantineProvider>
  );
};

export default App;
