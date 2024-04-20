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
import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Select } from '@material-ui/core'
import { useAuth } from 'src/hooks/useAuth'
import MenuItem from '@mui/material/MenuItem'

const ModalPopup = ({ data, open, openchange }) => {
  const { courseList, fetchCourseList, getProfessor, store } = useAuth()
  const [selectedCourse, setSelectedCourse] = useState({})
  const [yesNo, setYesNo] = useState(false)
  const [prerequisite, setPrerequisite] = useState({})
  const [fullMarks, setFullMarks] = useState(100)
  const [parts, setParts] = useState(1)
  const [professorList, setProfessorList] = useState([])
  const [selectedProfessors, setSelectedProfessors] = useState([{}, {}, {}, {}])
  useEffect(() => {
    console.log(selectedProfessors)
  }, [selectedProfessors])

  useEffect(() => {
    getProfessor({ dept_id: data.currBranchId }).then(res => {
      setProfessorList(res)
    })
  }, [])

  useEffect(() => {
    fetchCourseList({ dept_id: data.currBranchId })
  }, [])
  useEffect(() => {
    console.log(courseList)
  }, [courseList])
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
                      <TextField id='outlined-basic' variant='outlined' size='small' value={data.currBatch}></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={data.currSession}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={data.currCourseId}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={data.currBranchId}
                      ></TextField>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Department</TableCell>
                    <TableCell>Semester</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={data.currBranchId}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField id='outlined-basic' variant='outlined' size='small' value={data.currSem}></TextField>
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
                      {/* make select having option present in courseList */}
                      <Select
                        variant='outlined'
                        size='small'
                        onChange={e => setSelectedCourse(courseList.find(course => course.id === e.target.value))}
                        value={selectedCourse?.sub_name}
                      >
                        {courseList && courseList.map(course => <option value={course.id}>{course.sub_name}</option>)}
                      </Select>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.wef_year}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.wef_session}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.sub_code}
                      ></TextField>
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
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.lecture}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.tutorial}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.practical}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.credit_hours}
                      ></TextField>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Contact Hours</TableCell>
                    <TableCell>Course Type</TableCell>
                    <TableCell>Course Category</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.contact_hours}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.sub_type}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={selectedCourse?.sub_type}
                      ></TextField>
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
                      <Select
                        variant='outlined'
                        size='small'
                        value={yesNo ? 'Yes' : 'No'}
                        onChange={e => setYesNo(e.target.value === 'Yes')}
                      >
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </Select>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    {yesNo && (
                      <>
                        <TableCell>Select Prerequisite:</TableCell>
                        <TableCell>
                          <Select
                            variant='outlined'
                            size='small'
                            value={prerequisite?.sub_name}
                            onChange={e => setPrerequisite(courseList.find(course => course.id === e.target.value))}
                          >
                            {courseList &&
                              courseList.map(course => <option value={course.id}>{course.sub_name}</option>)}
                          </Select>
                        </TableCell>
                      </>
                    )}
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
                      <TextField
                        id='outlined-basic'
                        variant='outlined'
                        size='small'
                        value={fullMarks}
                        onChange={e => setFullMarks(e.target.value)}
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <Select variant='outlined' size='small' value={parts} onChange={e => setParts(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </Select>
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
                  {/* render as many rows as there are parts */}
                  {Array.from({ length: parts }).map((_, index) => (
                    <>
                      <TableRow>
                        <TableCell>Parts</TableCell>
                        <TableCell>Department Name</TableCell>
                        <TableCell>Faculty</TableCell>
                        <TableCell>Marks Upload Right</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <TextField
                            id='outlined-basic'
                            label='Session Year'
                            variant='outlined'
                            size='small'
                            value={index + 1}
                          ></TextField>
                        </TableCell>
                        <TableCell>
                          <TextField
                            id='outlined-basic'
                            label='Session'
                            variant='outlined'
                            size='small'
                            value={data.currBranchId}
                          ></TextField>
                        </TableCell>
                        <TableCell>
                          <TextField variant='outlined' size='small' value={'Saurav Srivasatava'}></TextField>
                        </TableCell>
                        <TableCell>
                          <Select variant='outlined' size='small' value='Yes'>
                            <MenuItem value='Yes'>Yes</MenuItem>
                            <MenuItem value='No'>No</MenuItem>
                          </Select>
                        </TableCell>
                        <TableCell>
                          {/* create a button with add symbol */}
                          <Button color='primary' variant='contained'>
                            +
                          </Button>
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* make sure that submit button is only enabled after clicking on checkbox */}
            <Button
              color='primary'
              variant='contained'
              onClick={() => {
                const params = { selectedCourse, yesNo, prerequisite, fullMarks, parts, selectedProfessors, data }
                store(params)
              }}
            >
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
