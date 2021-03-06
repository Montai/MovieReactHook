import React, { useState, useReducer, Fragment } from 'react'
import axios from 'axios'
import Dropdown from 'react-dropdown'
import { initialState, reducer } from '../store'
import { generateYears } from '../utils/Utils'
import 'react-dropdown/style.css'

// const options = ['one', 'two', 'three']
const SEARCH_MOVIES_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=ff771dd8f4f76b14aaeab6fe96370355&query='
const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'pt', label: 'Portugese' },
    { value: 'zh', label: 'Chinese' },
]

const Filter = ({ searchQuery, movie, filterSearch }) => {
    console.log('sq', searchQuery)
    const [year, setYear] = useState(
        movie && movie.release_date ? movie.release_date : '2020',
    )
    const [language, setLanguage] = useState('English')
    const handleFilter = evt => {
        evt.preventDefault()
        const query =
            searchQuery +
            `&language=${language}&page=1&include_adult=false&region=US&year=${year}`
        filterSearch(searchQuery, query)
    }

    const handleChangeYear = evt => setYear(evt.value)
    const handleClear = evt => {
        evt.preventDefault()
        setYear('2020')
        setLanguage('English')
    }
    const handleChangeLanguage = evt => setLanguage(evt.value)

    return (
        <Fragment>
            <div className="">{searchQuery}</div>
            <div className="year-filter">
                <h4>Release year</h4>
                <Dropdown
                    options={generateYears()}
                    onChange={handleChangeYear}
                    value={year}
                    placeholder="Select year"
                />
            </div>
            <div className="language-filter">
                <h4>Language</h4>
                <Dropdown
                    options={languages}
                    onChange={handleChangeLanguage}
                    value={language}
                    placeholder="Select language"
                />
            </div>
            <div className="apply-filter">
                <div class="filter-container">
                    <button class="filter-btn" onClick={handleFilter}>
                        Apply
                    </button>
                    <button class="clear-btn" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Filter
