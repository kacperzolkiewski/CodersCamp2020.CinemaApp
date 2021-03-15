import App from "./App"
import AuthenticationController from "./routes/controllers/authentication.controller"
import FilmController from "./routes/controllers/film.controller"

const app = new App([new AuthenticationController(), new FilmController()])

app.listen()
