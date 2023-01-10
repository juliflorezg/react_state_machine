import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Props } from '../containers/StepsLayout'
import './Passengers.css'

export const Passengers = ({ state, send }: Props) => {
  const [value, changeValue] = useState('')

  const onChangeInput = (e: FormEvent<HTMLInputElement>) => {
    changeValue(e.currentTarget.value)

    console.log(e.currentTarget.value)
  }

  const goToTicket = () => {
    send('DONE')
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    changeValue('')
  }

  return (
    <form onSubmit={submit} className="Passengers">
      <p className="Passengers-title title">
        Agrega a las personas que van a volar ✈️
      </p>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Escribe el nombre completo"
        required
        value={value}
        onChange={onChangeInput}
      />
      <div className="Passengers-buttons">
        <button className="Passengers-add button-secondary" type="submit">
          Agregar Pasajero
        </button>
        <button
          className="Passenger-pay button"
          type="button"
          onClick={goToTicket}
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  )
}
