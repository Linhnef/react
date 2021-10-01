/* import Box from "@material-ui/core/Box"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import UpdateIcon from "@material-ui/icons/Update"
import styled from "styled-components"
import { Fragment, useState } from "react"
import TypographyOverline from "./Text/TypographyOverline"

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.rating}</TableCell>
        <TableCell align="right">{row.amount}</TableCell>
        <TableCell align="center">
          <IconButton>
            <UpdateIcon />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <Cell colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Evaluate
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TypographyOverline>Order ID</TypographyOverline>
                    </TableCell>
                    <TableCell>
                      <TypographyOverline>Description</TypographyOverline>
                    </TableCell>
                    <TableCell align="center">
                      <TypographyOverline>Rating</TypographyOverline>
                    </TableCell>
                    <TableCell align="center">
                      <TypographyOverline>Delete</TypographyOverline>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.evaluate.map((data) => (
                    <TableRow key={data.orderId}>
                      <TableCell component="th" scope="row">
                        <TypographyOverline>{data.orderId}</TypographyOverline>
                      </TableCell>
                      <TableCell>
                        <TypographyOverline>{data.description} </TypographyOverline>
                      </TableCell>
                      <TableCell align="center">
                        <TypographyOverline>{data.rating}</TypographyOverline>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </Cell>
      </TableRow>
    </Fragment>
  )
}

const Cell = styled(TableCell)`
  &.MuiTableCell-root {
    padding-top: 0;
    padding-bottom: 0;
  }
`

export interface TableData<T> {
  rows: T[]
}

export default function DataTable<T>(props: T) {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              {Object.keys(props).map((key) => (
                <TableCell>
                  <TypographyOverline>{key}</TypographyOverline>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

const Container = styled.div`
  & span {
    font-weight: 900;
  }
`
 */
import React from "react"

function Table() {
  return <div></div>
}

export default Table
