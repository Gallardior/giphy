import React, { useState } from "react";
import { useLocation } from "wouter";
import './Searcher.css'

const Searcher = () => {
  const [keyword, setKeyword] = useState('')
  const [, setLocation] = useLocation()

  function handleChange (e) {
    setKeyword(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    setLocation(`/gifs/${keyword}`)
    setKeyword('')
  }

  return (
    <form onSubmit={ handleSubmit } className="FormSearch">
      <input onChange={ handleChange } placeholder="Buscar..." value={ keyword } className="FormSearch__input"/>
      <button type="submit" className="FormSearch__button">Buscar</button>
    </form>
  )
}

export { Searcher }