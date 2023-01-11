import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Send } from '../interfaces/machineTypes'
import './Search.css'

export const Search = ({ state, send }: { state: any; send: Send }) => {
  const [flight, setFlight] = useState('')

  const goToPassengers = () => {
    send('CONTINUE', { selectedCountry: flight })
  }

  const handleSelectChange = (event: FormEvent<HTMLSelectElement>) => {
    setFlight(event.currentTarget.value)
    send('CHANGE_COUNTRY', { selectedCountry: event.currentTarget.value })
  }

  const options = state.context.countries

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
        {options.map((option: any) => (
          <option
            value={option.translations.spa.official}
            key={option.translations.spa.official}
          >
            {option.translations.spa.official}
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
