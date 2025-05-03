import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Title,
  Card,
  Text,
  Paper,
  Group,
  Center,
  Grid,
  Divider,
  Badge,
  ActionIcon,
} from "@mantine/core";
import {
  IconBook,
  IconUser,
  IconWorldWww,
  IconRefresh,
} from "@tabler/icons-react";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  program: string;
}

interface Subject {
  id: number;
  name: string;
  year: string;
}

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [nodeId, setNodeId] = useState<string>("");
  const [view, setView] = useState<"students" | "subjects" | "">("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (endpoint: "students" | "subjects") => {
    setLoading(true);
    try {
      const res = await axios.get(`http://51.21.251.240:5000/${endpoint}`);
      if (endpoint === "students") {
        setStudents(res.data);
      } else {
        setSubjects(res.data);
      }
    } catch (err) {
      console.error(`Error fetching ${endpoint}:`, err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setNodeId(import.meta.env.VITE_NODE_ID || "unknown");
  }, []);

  return (
    <Container size="lg" py="xl">
      <Paper p="xl" radius="md" withBorder>
        <Center mb="xl">
          <Group gap="sm">
            <IconWorldWww size={28} color="#228be6" />
            <Title order={2} fw={600}>
              Student Portal
            </Title>
          </Group>
        </Center>

        <Center mb="xl">
          <Badge color="blue" variant="light" size="lg">
            Node: {nodeId}
          </Badge>
        </Center>

        <Group
          justify="center"
          mb="xl"
          grow
          gap="sm"
          style={{ maxWidth: 500, margin: "0 auto" }}
        >
          <Button
            variant={view === "students" ? "filled" : "outline"}
            leftSection={<IconUser size={18} />}
            size="md"
            radius="md"
            loading={loading && view === "students"}
            onClick={() => {
              fetchData("students");
              setView("students");
            }}
          >
            Students
          </Button>
          <Button
            variant={view === "subjects" ? "filled" : "outline"}
            leftSection={<IconBook size={18} />}
            size="md"
            radius="md"
            loading={loading && view === "subjects"}
            onClick={() => {
              fetchData("subjects");
              setView("subjects");
            }}
          >
            Courses
          </Button>
          <ActionIcon
            onClick={() => view && fetchData(view)}
            variant="outline"
            size="lg"
            radius="md"
            loading={loading}
          >
            <IconRefresh size={18} />
          </ActionIcon>
        </Group>

        <Divider my="xl" />

        <Grid gutter="xl">
          {view === "students" &&
            students.map((s) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={s.id}>
                <Card withBorder radius="md" h="100%">
                  <Text fz="lg" fw={600} mb="xs">
                    {s.name}
                  </Text>
                  <Text fz="sm" c="dimmed">
                    <Text span fw={500} c="dark">
                      Program:
                    </Text>{" "}
                    {s.program}
                  </Text>
                </Card>
              </Grid.Col>
            ))}

          {view === "subjects" &&
            subjects.map((s) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={s.id}>
                <Card withBorder radius="md" h="100%">
                  <Text fz="lg" fw={600} mb="xs">
                    {s.name}
                  </Text>
                  <Text fz="sm" c="dimmed">
                    <Text span fw={500} c="dark">
                      Year:
                    </Text>{" "}
                    {s.year}
                  </Text>
                </Card>
              </Grid.Col>
            ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
