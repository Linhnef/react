import { Typography, TextField } from "@material-ui/core"
import { useEffect } from "react"
import { ChangeEvent, useState, KeyboardEvent } from "react"
import styled, { createGlobalStyle } from "styled-components"

interface Todo {
  description: string
  complete: boolean
}

function TodoList() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])
  const PushTodo = (data: Todo) => {
    setTodos([...todos, data])
  }
  const UpdateTodo = (data: Todo) => {
    const tmp = todos.filter((item) => item.description === data.description)
    tmp[0].complete = !data.complete
    setTodos([...todos])
  }
  const removeTodo = (data: Todo) => {
    const tmp = todos.filter((item) => item.description !== data.description)
    setTodos([...tmp])
  }
  useEffect(() => {
    const fetch = () => {
      const tmp = localStorage.getItem("todos")
      if (typeof tmp === "string") {
        const list: Todo[] = JSON.parse(tmp)
        setTodos(list)
      }
    }
    fetch()
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <GlobalStyle />
      <Container>
        <Typography variant="h1">todos</Typography>
        <FillBox
          value={todo}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTodo(event.target.value)
          }}
          onKeyDown={(event: KeyboardEvent) => {
            if (event.code === "Enter") {
              PushTodo({ description: todo, complete: false })
              setTodo("")
            }
          }}
          variant="outlined"
          placeholder="Enter your todo"
        />
        {todos.map((item) => (
          <Item onClick={() => UpdateTodo(item)} onDoubleClick={() => removeTodo(item)} completedd={item.complete}>
            <Typography>{item.description}</Typography>
          </Item>
        ))}
        <Footer>
          <Typography>Left click to toggle completed. </Typography>
          <Typography>Double click to delete todo </Typography>
        </Footer>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
interface ItemProps {
  completedd: boolean
}

const Item = styled.div<ItemProps>`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b6b6b6;
  text-decoration: ${(props) => (props.completedd ? "line-through" : "")};
  color: ${(props) => (props.completedd ? "#b6b6b6" : "#000")};
  &:hover {
    cursor: pointer;
  }
`

const Container = styled.div`
  width: 40%;
  margin-left: 30%;
  align-items: center;
  text-align: center;
  & h1 {
    font-size: 10em;
    font-weight: 900;
    color: #aaa;
  }
`
const FillBox = styled(TextField)`
  width: 100%;
  & input {
    font-size: 2em;
  }
`
const Footer = styled.div`
  margin: 1em 0;
  & p {
    color: #b5b5b5;
  }
`

export default TodoList
