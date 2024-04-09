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

const ModalPopup = ({ data, open, openchange }) => {
  const [checked, setChecked] = useState(false)
  const functionopenpopup = () => {
    openchange(true)
  }
  const closepopup = () => {
    openchange(false)
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <Dialog
        // fullScreen
        open={open}
        onClose={closepopup}
        fullWidth
        maxWidth='lg'
      >
        <DialogTitle>
          Offer Course and map with Instructor
          <IconButton onClick={closepopup} style={{ float: 'right' }}>
            <CloseIcon color='primary'></CloseIcon>
          </IconButton>{' '}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Session Year</TableCell>
                    <TableCell>Session</TableCell>
                    <TableCell>Program</TableCell>
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
                      <TextField id='outlined-basic' label='Program' variant='outlined' size='small'></TextField>
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
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Course Name</TableCell>
                    <TableCell>Introduced Session Year</TableCell>
                    <TableCell>Introduced Session</TableCell>
                    <TableCell>Course Code</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField id='outlined-basic' label='Session Year' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Session' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Program' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Branch' variant='outlined' size='small'></TextField>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lecture</TableCell>
                    <TableCell>Tutorial</TableCell>
                    <TableCell>Practical</TableCell>
                    <TableCell>Credit Hour</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField id='outlined-basic' label='Session Year' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Session' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Program' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Branch' variant='outlined' size='small'></TextField>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Contact Hours</TableCell>
                    <TableCell>Course Type</TableCell>
                    <TableCell>Course Category</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField id='outlined-basic' label='Session Year' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Session' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Program' variant='outlined' size='small'></TextField>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Prerequisite</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField id='outlined-basic' label='Session Year' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Full Marks</TableCell>
                    <TableCell>How many Part</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
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
            </TableContainer>
            <TableContainer component={Paper}>
              Marks Table
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Parts</TableCell>
                    <TableCell>Department Name</TableCell>
                    <TableCell>Faculty</TableCell>
                    <TableCell>Marks Upload Right</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField id='outlined-basic' label='Session Year' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Session' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Program' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' label='Branch' variant='outlined' size='small'></TextField>
                    </TableCell>
                    <TableCell>
                      {/* create a button with add symbol */}
                      <Button color='primary' variant='contained'>
                        +
                      </Button>
                    </TableCell>

                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* make sure that submit button is only enabled after clicking on checkbox */}
            <Button color='primary' variant='contained'>
              Save
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalPopup
