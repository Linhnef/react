import { Avatar, Typography } from "@material-ui/core"
import { useEffect } from "react"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useAppApiClient } from "../../hooks/useAppApiClient"
import useAsync from "../../hooks/useAsync"
import { PokeDex as pokeDex } from "../../services/api/createAppApiClient"

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
}

function PokeDex() {
  const api = useAppApiClient()
  const [pokeDexs, setPokeDexs] = useState<pokeDex[]>([])
  const getPokeDex = useAsync(async (data: number) => {
    const response = await api.getPokeDex(data)
    if (!response) return
    setPokeDexs(response)
  })
  const getColor = (color: string): string => {
    return color === "fire"
      ? colors.fire
      : color === "grass"
      ? colors.grass
      : color === "electric"
      ? colors.electric
      : color === "water"
      ? colors.water
      : color === "ground"
      ? colors.ground
      : color === "rock"
      ? colors.rock
      : color === "fairy"
      ? colors.fairy
      : color === "poison"
      ? colors.poison
      : color === "bug"
      ? colors.bug
      : color === "dragon"
      ? colors.dragon
      : color === "psychic"
      ? colors.psychic
      : color === "flying"
      ? colors.flying
      : color === "fighting"
      ? colors.fighting
      : colors.normal
  }
  useEffect(() => {
    const getDex = () => {
      getPokeDex.run(100)
    }
    getDex()
  }, [])
  return (
    <>
      <GlobalStyle />
      <DexContainer>
        {pokeDexs.map((item) => (
          <Dex color={getColor(item.types[0].type.name)}>
            <Picture src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} />
            <Id>
              <Typography variant="overline">#{item.id.toString().padStart(3, "0")}</Typography>
            </Id>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="overline">Type:{item.types[0].type.name}</Typography>
          </Dex>
        ))}
      </DexContainer>
    </>
  )
}

const DexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
`

const Id = styled.div`
  margin: 0.5em 0;
  & span {
    font-size: 0.6em;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 2em;
    height: 1.3em;
    border-radius: 0.5em;
    padding: 0.3em;
  }
`
const Picture = styled(Avatar)`
  width: 5em !important;
  height: 5em !important;
  border: 1px solid rgba(0, 0, 0, 0.5);
`

interface DexProps {
  color: string
}

const Dex = styled.div<DexProps>`
  background-color: ${(props) => props.color};
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  padding: 1.2em;
  margin: 0.8em;
  border-radius: 0.5em;
  text-align: center;
  & span {
    font-size: 0.6em;
    font-weight: 600;
  }
  & h6 {
    font-size: 1em;
    font-weight: 900;
  }
`

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: #efefbb;
        background: linear-gradient(to right, #d4d3dd, #efefbb);
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          background-color: #f5f5f5;
          display: none;
        }
        &::-webkit-scrollbar {
          width: 0.3vw;
          background-color: #f5f5f5;
          display: none;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: #555;
          display: none;
        }
    }
`

export default PokeDex
