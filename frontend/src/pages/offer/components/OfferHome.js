import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core'

function OfferHome() {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Session</TableCell>
            <TableCell>Session Year</TableCell>
            <TableCell>Programme</TableCell>
            <TableCell>Branch</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField id='outlined-basic' label='Session Year' variant='outlined' size='small'></TextField>
            </TableCell>
            <TableCell>
              <TextField id='outlined-basic' label='Session' variant='outlined' size='small'></TextField>
            </TableCell>
            <TableCell>
              <TextField id='outlined-basic' label='Programme' variant='outlined' size='small'></TextField>
            </TableCell>
            <TableCell>
              <TextField id='outlined-basic' label='Branch' variant='outlined' size='small'></TextField>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Department</TableCell>
            <TableCell>Semester</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField id='outlined-basic' label='Session Year' variant='outlined' size='small'></TextField>
            </TableCell>
            <TableCell>
              <TextField id='outlined-basic' label='Session' variant='outlined' size='small'></TextField>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default OfferHome
