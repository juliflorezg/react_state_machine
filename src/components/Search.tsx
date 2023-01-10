import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Send } from '../containers/StepsLayout'
import './Search.css'

export const Search = ({ send }: Send) => {
  const [flight, setFlight] = useState('')

  const goToPassengers = () => {
    send('CONTINUE')
  }

  const handleSelectChange = (event: FormEvent<HTMLSelectElement>) => {
    setFlight(event.currentTarget.value)
  }

  const options = ['Mexico', 'Venezuela', 'Colombia']

  return (
    <div className="Search">
      <p className="Search-title title">Busca tu destino</p>
      <select
        id="country"
        className="Search-select"
        value={flight}
        onChange={handleSelectChange}
      >
        <option value="" disabled defaultValue={options[0]}>
          Escoge un país
        </option>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        onClick={goToPassengers}
        disabled={flight === ''}
        className="Search-continue button"
      >
        Continuar
      </button>
    </div>
  )
}
