import React, { Fragment } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const DEFAULT_IMAGE_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/'
const DEFAULT_PLACEHOLDER_IMAGE =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'
const MoviePopup = ({ isShowing, hide, movie }) => {
    const {
        vote_average,
        overview,
        vote_count,
        popularity,
        title,
        adult,
    } = movie
    const movieRating = vote_average * 10
    const poster =
        movie.poster_path && movie.poster_path === null
            ? DEFAULT_PLACEHOLDER_IMAGE
            : DEFAULT_IMAGE_URL + movie.poster_path

    return (
        isShowing && (
            <Fragment>
                <div className="modal-overlay" />
                <div
                    className="modal-wrapper"
                    aria-modal
                    aria-hidden
                    tabIndex={-1}
                    role="dialog">
                    <div className="modal">
                        <div className="modal-header">
                            <div className="close" onClick={hide}></div>
                        </div>
                        <div class="container-poster">
                            <div class="poster">
                                <div class="poster__img">
                                    <img
                                        width="200"
                                        height="300"
                                        alt={`The movie titled: ${movie.title}`}
                                        src={poster}
                                    />
                                </div>
                                <div class="poster__info">
                                    <h1 class="poster__title">{title}</h1>
                                    <p class="poster__text">{overview}</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-container">Rating</div>
                                <div className="circular-rating">
                                    <CircularProgressbar
                                        value={movieRating}
                                        text={`${movieRating}%`}
                                    />
                                </div>
                                <div className="box-container">Vote Count</div>
                                <div className="box-container">
                                    {vote_count}
                                </div>
                                <div className="box-container">Popularity</div>
                                <div className="box-container">
                                    {popularity}
                                </div>
                            </div>

                            <a href="#">Find out more</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    )
}

export default MoviePopup
