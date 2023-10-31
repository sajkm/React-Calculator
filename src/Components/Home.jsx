import React, { useState } from 'react'
import './Home.css'

function Home() {
    const [result,setResult] = useState("")

    const handleClick = (e) =>{
        setResult(result.concat(e.target.value))
    }

    const handleDelete=()=>{
        setResult("")
    }

    const handleSubmit = ()=>{
        try{
            setResult(eval(result).toString())
        }catch(err){
            setResult("Error...")
    }
    }
    const handleBack =() =>{
        setResult(result.slice(0,-1))
    }

  return (
    <>
    <div className='Home'>
        <h1>CALCULATOR</h1>
        <form>
            <input className='display' type="text" value={result} />
        </form>
        <div className='btn'>
            <button value='7' onClick={handleClick}>7</button>
            <button value='8' onClick={handleClick}>8</button>
            <button value='9' onClick={handleClick}>9</button>
            <button value='/' onClick={handleClick}>/</button>
            <button value='4' onClick={handleClick}>4</button>
            <button value='5' onClick={handleClick}>5</button>
            <button value='6' onClick={handleClick}>6</button>
            <button value='*' onClick={handleClick}>*</button>
            <button value='1' onClick={handleClick}>1</button>
            <button value='2' onClick={handleClick}>2</button>
            <button value='3' onClick={handleClick}>3</button>
            <button value='-' onClick={handleClick}>-</button>
            <button onClick={handleBack}>C</button>
            <button value='0' onClick={handleClick}>0</button>
            <button value='.' onClick={handleClick}>.</button>
            <button value='+' onClick={handleClick}>+</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleSubmit}>=</button>
            
        </div>
    </div>
    </>
  )
}

export default Home