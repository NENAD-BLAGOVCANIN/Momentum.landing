import { Button } from "../ui/button";
import dashboardDark from "../../assets/presentation/dashboard-dark-framed.png";
import { Download } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 flex items-center justify-center">
      <div className="flex flex-col items-start text-left">
        <h2 className="text-4xl font-bold mb-4">Manage Your Life With Ease</h2>
        <p
          className="text-muted-foreground text-justify mb-6"
          style={{ maxWidth: 500 }}
        >
          MyLife is your all-in-one personal assistant designed to help you stay
          productive, organized, and inspired. Whether you're managing daily
          tasks, setting long-term goals, or capturing your next big idea,
          MyLife gives you the tools to bring structure and clarity to your
          life. With a clean, intuitive interface and smart features, MyLife
          empowers you to focus on what matters most—your growth, your goals,
          and your peace of mind.
        </p>
        <div className="flex gap-4">
          <Button variant="default">
            <Download /> Download for Android
          </Button>
          <Button variant="default">
            <Download /> Download for iOS
          </Button>
        </div>
      </div>
      <div className="flex gap-6 ml-12 px-5">
        <img
          src={dashboardDark}
          alt="Dashboard Dark"
          style={{ maxWidth: 350 }}
        />
      </div>
    </section>
  );
}
