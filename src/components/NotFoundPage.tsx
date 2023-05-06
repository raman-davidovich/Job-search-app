import GlobalSvgSelector from "../assets/icons/global/GlobalSvgSelector";
import { Center, Space, Stack, Text, Button } from "@mantine/core";

const NotFoundPage = () => {
  return (
    <>
      <Space h={120} />
      <Center maw={328} mx="auto">
        <Stack spacing="xl" align="center">
          <GlobalSvgSelector id="not_found" />
          <Text fz="lg" fw={700}>
            Упс, здесь ещё ничего нет!
          </Text>
          <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="sm"
            sx={(theme) => ({
              fontFamily: "Open Sans, sans-serif",
              color: theme.colors.blue[5],
            })}
          >
            Поиск Вакансий
          </Button>
        </Stack>
      </Center>
    </>
  );
};

export default NotFoundPage;
