import { BodyStyle, Spreader, AppWrapper } from "./global";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BaseSection } from "./components/BaseSection";
import { PresentationArea } from "./components/PresentationArea";
import { FormCard } from "./components/FormCard";
import { PigzItems } from "./components/PigzItems";
import pigz from "./assets/images/pigz-pigz.png";
import "animate.css/animate.min.css";

function App() {
  return (
    <AppWrapper>
      <BodyStyle />
      <Header />
      <BaseSection bg="gradient" height="1015px">
        <PresentationArea />
        <Spreader size="medium" />
        <FormCard />
      </BaseSection>
      <div className="pigz-pigz">
        <img src={pigz} alt="pigz-image" />
      </div>
      <BaseSection bg="white" height="100%">
        <PigzItems />
        <Footer />
      </BaseSection>
    </AppWrapper>
  );
}

export default App;
