import React from 'react'
import Skillcard from '../components/skillcard'
const skill = () => {
  return (
    <div className='ss'>
      <div><h1>Technical Arsenal </h1></div>
      <br />
      <br />
      <div className='sss'>
        <Skillcard image='' name='C++' heading1 ='Strong command of core language features and STL containers' heading2='Experience writing clean, efficient, and well-structured code.' heading3='Focus on performance, correctness, and edge-case handling.' />
        <Skillcard image='' name='React' heading1 ='Built reusable components using React and JSX' heading2='Managed UI state and component lifecycle with hooks.' heading3='Implemented routing and modular structure for scalable applications.' />
        <Skillcard image='' name='HTML' heading1 ='Structured web pages using semantic HTML.' heading2='Organized content for accessibility and clarity.' heading3='Integrated HTML with CSS and JavaScript.' />
        <Skillcard image='' name='CSS' heading1 ='tyled responsive layouts using Flexbox and Grid' heading2='Applied animations, transitions, and hover effects.' heading3='Maintained clean, reusable stylesheets.' />
        <Skillcard image='' name='C' heading1 ='Implemented core programming concepts and control structures.' heading2='Worked with functions, pointers, and memory basics.' heading3='Wrote efficient, structured procedural code.' />
        <Skillcard image='' name='Python' heading1 ='Wrote clean, readable scripts and programs.' heading2='Used built-in libraries for automation and problem-solving.' heading3='Applied logical thinking to real-world programming tasks.' />
        <Skillcard image='' name='Data Structures & Algorithms' heading1 ='Applied core data structures to solve structured problems.' heading2='Analyzed time and space complexity for efficient solutions.' heading3='Used recursion, iteration, and problem decomposition effectively.' />
        <Skillcard image='' name='Leetcode' heading1 ='Practiced consistent problem-solving across varied difficulty levels.' heading2='Improved logical thinking and solution optimization.' heading3='Focused on accuracy, edge-case handling, and clean implementations.' />
      </div>
    </div>
  )
}

export default skill
