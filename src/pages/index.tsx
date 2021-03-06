import React, { ChangeEvent, useRef, useState } from 'react'
import Select from '../components/Select'
import Head from 'next/head'

import { faleMais, ddd } from '../../data.json'

import * as Styled from './indexStyled.module'
import { calculateCallValue } from '../utils/calculate'
import { validateMinute, validateSelect } from '../utils/validate'
import Button from '../components/Button'

interface propsCall {
  withPlan?: string
  withoutPlan?: string
}

export default function Home() {
  const [destiny, setDestiny] = useState([])
  const [callValue, setCallValue] = useState<propsCall>({})
  const [minute, setMinute] = useState('')

  const refPlan = useRef<HTMLSelectElement>(null)
  const refDDD = useRef<HTMLSelectElement>(null)
  const refDestiny = useRef<HTMLSelectElement>(null)
  const refMinute = useRef<HTMLInputElement>(null)

  const alterDDD = (obj: any[]) => {
    setDestiny(obj)
  }

  function handlerChange(e: ChangeEvent<HTMLInputElement>) {
    setMinute(e.target.value.replace(/[^\d\s-/]/g, ''))
  }

  const handleCall = () => {
    if (
      !validateSelect(refPlan.current) ||
      !validateSelect(refDDD.current) ||
      !validateSelect(refDestiny.current) ||
      !validateMinute(refMinute.current)
    ) {
      alert('Verifique os dados e tente novamente')
      return
    }

    const plan = parseInt(refPlan.current.value)
    const DestinyValue = parseInt(refDestiny.current.value)
    const minuteInt = parseInt(minute)

    const result = calculateCallValue(plan, DestinyValue, minuteInt)

    setCallValue(result)
  }

  return (
    <Styled.Container>
      <Head>
        <title>Telzir</title>
      </Head>
      <Styled.Header>
        <h1>Telzir</h1>
      </Styled.Header>
      <Styled.Body>
        <h2>FaleMais</h2>
        <Styled.Form>
          <Select
            placeholder="Selecione o seu Plano"
            data={faleMais}
            ref={refPlan}
          />
          <Select
            placeholder="Selecione O DDD De Origem"
            data={ddd}
            ref={refDDD}
            selectValue={alterDDD}
          />
          <Select
            placeholder="Selecione O DDD De Destino"
            data={destiny}
            ref={refDestiny}
          />
          <input
            placeholder="Tempo Da Liga????o Em Minutos"
            ref={refMinute}
            onBlur={() => validateMinute(refMinute.current)}
            value={minute}
            onChange={handlerChange}
          />
          <Button onClick={handleCall} label="Calcular" />
        </Styled.Form>
        {callValue?.withoutPlan && (
          <Styled.Result>
            <h3>Custo da liga????o</h3>
            <ul>
              <li>
                <p>
                  Com O Plano FaleMais: <span>R$ {callValue?.withPlan}</span>
                </p>
              </li>
              <li>
                <p>
                  Sem O Plano FaleMais: <span>R$ {callValue?.withoutPlan}</span>
                </p>
              </li>
            </ul>
          </Styled.Result>
        )}
      </Styled.Body>
    </Styled.Container>
  )
}
