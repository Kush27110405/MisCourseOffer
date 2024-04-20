import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import ModelPopjs from './_components/ModelPopjs'
import { useAuth } from 'src/hooks/useAuth'

const CourseOffer = () => {
  const url = process.env.APIURL
  const [componentTotalJson, setComponentTotalJson] = useState([])
  const [componentDoneJson, setComponentDoneJson] = useState([])
  const router = useRouter()
  const [open, openchange] = useState(false)
  const [data, setData] = useState([])
  const { courseData } = useAuth()
  console.log(courseData)

  const {
    query: {
      component_total,
      component_done,
      session_year,
      session,
      programme,
      branch,
      course_id,
      branch_id,
      sem,
      component_name,
      component_code,
      branches
    }
  } = router

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (component_total) {
          const totalJson = JSON.parse(component_total)
          setComponentTotalJson(totalJson)
        }
        if (component_done) {
          const doneJson = JSON.parse(component_done)
          setComponentDoneJson(doneJson)
        }
      } catch (error) {
        console.error('Error parsing JSON:', error)
      }
    }

    fetchData()
  }, [component_total, component_done])

  const handleDelete = async el => {
    try {
      await axios.delete(`${url}deleteOffers`, { data: { id: el.id.toString() } })
      const arr = componentDoneJson.filter(it => it.id !== el.id)
      setComponentDoneJson(arr)
      router.push({
        pathname: '/courseoffer',
        query: {
          session_year,
          session,
          programme,
          branch,
          course_id,
          branch_id,
          sem,
          component_name,
          component_code,
          component_total: JSON.stringify(componentTotalJson),
          component_done: JSON.stringify(arr),
          branches: JSON.stringify(branches)
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <ModelPopjs open={open} openchange={openchange} data={courseData} />
      <Button variant='outlined' onClick={() => router.push('/course')}>
        Go Back
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Category</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {componentTotalJson.map((el, index) => {
            const currCode = component_code + el.sequence
            let b = []
            componentDoneJson.forEach(it => {
              if (it.sub_category === currCode) b.push(it)
            })
            if (b.length > 0) {
              return (
                <TableRow key={index}>
                  <TableCell>{currCode}</TableCell>
                  <TableCell>
                    <Button variant='contained' color='secondary' onClick={() => handleDelete(b[0])}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            } else {
              return (
                <TableRow key={index}>
                  <TableCell>{currCode}</TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() => {
                        openchange(true)
                      }}
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              )
            }
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default CourseOffer
