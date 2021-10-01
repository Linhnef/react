import { Button, IconButton } from "@material-ui/core"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import PauseIcon from "@material-ui/icons/Pause"

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)
  const toggle = () => setPlaying(!playing)
  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])
  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false))
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false))
    }
  }, [])
  return { playing, toggle }
}

interface PalyerProps {
  url: string
}

const Play = (props: PalyerProps) => {
  const { playing, toggle } = useAudio(props.url)

  return <IconButton onClick={toggle}>{playing ? <Pause /> : <PlayIcon />}</IconButton>
}
const PlayIcon = styled(PlayArrowIcon)`
  height: 2em !important;
  width: 2em !important;
  color: #fafafa;
`

const Pause = styled(PauseIcon)`
  height: 2em !important;
  width: 2em !important;
  color: #fafafa;
`

export default Play
