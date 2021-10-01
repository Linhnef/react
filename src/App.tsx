import "./App.css"
import { Switch, Route } from "react-router-dom"
import { useLinks } from "./hooks/useLinks"
import Game from "./pages/50+ component react/Game"
import AnimationCountdown from "./pages/50+ component react/AnimationCountdown"
import AnimationNavigation from "./pages/50+ component react/AnimationNavigation"
import AutoTextEffect from "./pages/50+ component react/AutoTextEffect"
import BlurryLoading from "./pages/50+ component react/BlurryLoading"
import ButtonRipple from "./pages/50+ component react/ButtonRipple"
import Cart from "./pages/50+ component react/Cart"
import { Chat } from "./pages/50+ component react/Chat"
import ChoicePicker from "./pages/50+ component react/ChoicePicker"
import ContentPlaceHolder from "./pages/50+ component react/ContentPlaceHolder"
import DadJoke from "./pages/50+ component react/DadJoke"
import DobleVerticalSlide from "./pages/50+ component react/DobleVerticalSlide"
import DoubleClickHeart from "./pages/50+ component react/DoubleClickHeart"
import Drag from "./pages/50+ component react/Drag"
import DrawBox from "./pages/50+ component react/DrawBox"
import DrinkWater from "./pages/50+ component react/DrinkWater"
import EffectImageWithLenght from "./pages/50+ component react/EffectImageWithLenght"
import Expend from "./pages/50+ component react/Expend"
import FaqCollapse from "./pages/50+ component react/FaqCollapse"
import { Feedback, Notes } from "@material-ui/icons"
import FormWave from "./pages/50+ component react/FormWave"
import GitthubProfile from "./pages/50+ component react/GitthubProfile"
import GoodCheapSeat from "./pages/50+ component react/GoodCheapSeat"
import HiddenSearchWiget from "./pages/50+ component react/HiddenSearchWiget"
import HoverBoard from "./pages/50+ component react/HoverBoard"
import ImageFeed from "./pages/50+ component react/ImageFeed"
import Imageslider from "./pages/50+ component react/Imageslider"
import IncremntCounter from "./pages/50+ component react/IncremntCounter"
import KeneticLoading from "./pages/50+ component react/KeneticLoading"
import KeyDownHandle from "./pages/50+ component react/KeyDownHandle"
import MobileNav from "./pages/50+ component react/MobileNav"
import NexflixNavigation from "./pages/50+ component react/NexflixNavigation"
import OnlineUserFilter from "./pages/50+ component react/OnlineUserFilter"
import PasswordGanerate from "./pages/50+ component react/PasswordGanerate"
import PokeDex from "./pages/50+ component react/PokeDex"
import ProgressStep from "./pages/50+ component react/ProgressStep"
import QuizApp from "./pages/50+ component react/QuizApp"
import RangeSlier from "./pages/50+ component react/RangeSlier"
import RotatingNav from "./pages/50+ component react/RotatingNav"
import ScrollAnimation from "./pages/50+ component react/ScrollAnimation"
import SlideBackground from "./pages/50+ component react/SlideBackground"
import SoundBoard from "./pages/50+ component react/SoundBoard"
import SplitLandPage from "./pages/50+ component react/SplitLandPage"
import StickyNav from "./pages/50+ component react/StickyNav"
import Testimonial from "./pages/50+ component react/Testimonial"
import ThemeClock from "./pages/50+ component react/ThemeClock"
import Toast from "./pages/50+ component react/Toast"
import TodoList from "./pages/50+ component react/TodoList"
import Translate from "./pages/50+ component react/Translate"
import Verify from "./pages/50+ component react/Verify"
import MovieApp from "./pages/50+ component react/MovieApp"
import Home from "./pages/Home"

function App() {
  const link = useLinks.common
  return (
    <Switch>
      <Route exact path={link.home().toString()}>
        <Home />
      </Route>
      <Route path={link.game().toString()}>
        <Game />
      </Route>
      <Route path={link.animationCount().toString()}>
        <AnimationCountdown />
      </Route>
      <Route path={link.animationNv().toString()}>
        <AnimationNavigation />
      </Route>
      <Route path={link.autoEffectText().toString()}>
        <AutoTextEffect />
      </Route>
      <Route path={link.blurryLoading().toString()}>
        <BlurryLoading />
      </Route>
      <Route path={link.rippleButton().toString()}>
        <ButtonRipple />
      </Route>
      <Route path={link.cart().toString()}>
        <Cart />
      </Route>
      <Route path={link.chat().toString()}>
        <Chat />
      </Route>
      <Route path={link.choicePicker().toString()}>
        <ChoicePicker />
      </Route>
      <Route path={link.contentPlacerholder().toString()}>
        <ContentPlaceHolder />
      </Route>
      <Route path={link.dadJoke().toString()}>
        <DadJoke />
      </Route>
      <Route path={link.boubleVerticleSlide().toString()}>
        <DobleVerticalSlide />
      </Route>
      <Route path={link.doubleClickHeart().toString()}>
        <DoubleClickHeart />
      </Route>
      <Route path={link.drag().toString()}>
        <Drag />
      </Route>
      <Route path={link.drawBox().toString()}>
        <DrawBox />
      </Route>
      <Route path={link.drinkWater().toString()}>
        <DrinkWater />
      </Route>
      <Route path={link.imageEffectWithLength().toString()}>
        <EffectImageWithLenght />
      </Route>
      <Route path={link.expend().toString()}>
        <Expend />
      </Route>{" "}
      <Route path={link.faqCollapse().toString()}>
        <FaqCollapse />
      </Route>
      <Route path={link.feedBack().toString()}>
        <Feedback />
      </Route>
      <Route path={link.formWave().toString()}>
        <FormWave />
      </Route>
      <Route path={link.gitProfile().toString()}>
        <GitthubProfile />
      </Route>
      <Route path={link.goodCheatFast().toString()}>
        <GoodCheapSeat />
      </Route>
      <Route path={link.searchWiget().toString()}>
        <HiddenSearchWiget />
      </Route>
      <Route path={link.hoverBoard().toString()}>
        <HoverBoard />
      </Route>
      <Route path={link.imageFeed().toString()}>
        <ImageFeed />
      </Route>
      <Route path={link.imageSlider().toString()}>
        <Imageslider />
      </Route>
      <Route path={link.incrementCounter().toString()}>
        <IncremntCounter />
      </Route>
      <Route path={link.keneticLoading().toString()}>
        <KeneticLoading />
      </Route>
      <Route path={link.keyDown().toString()}>
        <KeyDownHandle />
      </Route>
      <Route path={link.mobileNav().toString()}>
        <MobileNav />
      </Route>
      <Route path={link.netflixNav().toString()}>
        <NexflixNavigation />
      </Route>
      <Route path={link.note().toString()}>
        <Notes />
      </Route>
      <Route path={link.onlineFilter().toString()}>
        <OnlineUserFilter />
      </Route>
      <Route path={link.passwordGenerate().toString()}>
        <PasswordGanerate />
      </Route>
      <Route path={link.pokeDex().toString()}>
        <PokeDex />
      </Route>
      <Route path={link.progressStep().toString()}>
        <ProgressStep />
      </Route>
      <Route path={link.quizApp().toString()}>
        <QuizApp />
      </Route>
      <Route path={link.rangeSlider().toString()}>
        <RangeSlier />
      </Route>
      <Route path={link.rotatingNav().toString()}>
        <RotatingNav />
      </Route>
      <Route path={link.scrollAnimation().toString()}>
        <ScrollAnimation />
      </Route>
      <Route path={link.slideBackground().toString()}>
        <SlideBackground />
      </Route>
      <Route path={link.soundBoard().toString()}>
        <SoundBoard />
      </Route>
      <Route path={link.splitLanding().toString()}>
        <SplitLandPage />
      </Route>
      <Route path={link.stickyNav().toString()}>
        <StickyNav />
      </Route>
      <Route path={link.Testimonial().toString()}>
        <Testimonial />
      </Route>
      <Route path={link.themeClock().toString()}>
        <ThemeClock />
      </Route>
      <Route path={link.toast().toString()}>
        <Toast />
      </Route>
      <Route path={link.todoList().toString()}>
        <TodoList />
      </Route>
      <Route path={link.translate().toString()}>
        <Translate />
      </Route>
      <Route path={link.verify().toString()}>
        <Verify />
      </Route>
      <Route path={link.movieAPp().toString()}>
        <MovieApp />
      </Route>
    </Switch>
  )
}

export default App
