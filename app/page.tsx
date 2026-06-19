import Button from "./components/ui/button";
import Card from "./components/ui/card";
import Container from "./components/layout/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-[420px] text-center space-y-5">
          <h1 className="text-3xl font-bold">
            Trendline
          </h1>

          <p className="text-zinc-400">
            Frontend is Ready 🚀
          </p>

          <Button>
            ورود به پنل
          </Button>
        </Card>
      </div>
    </Container>
  );
}