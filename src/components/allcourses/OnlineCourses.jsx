import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          {/* <Heading subtitle='SCHOLARSHIPS' title='Browse for other scholarships' /> */}
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                {/* <span>{val.course}</span> */}
                <button className='outline-btn'>APPLY NOW !</button>
              </div>
              
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
