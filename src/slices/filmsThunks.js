import { getMoviesBy } from "../services/films"
import { setFilms, startLoadingFilms } from "./filmsSlice"


//El thunk es una funcion que devuelve una accion asincrona
export const getFilms = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingFilms())

        try {
            const res = await getMoviesBy("pok");

            if (!res.ok) {
                //Notificar error con dispatch
            }
            const data = await res.json();
            const films = data["description"];
            console.log(films)


            dispatch(setFilms({ films: films }))

        } catch (error) {
            //Notificar error con dispatch
        }

    }
}