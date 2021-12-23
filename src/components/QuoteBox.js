import React from 'react'

const QuoteBox = ({quote, author, background, changeCitas}) => {
    return (
        <div className="quote">
            <i class="fas fa-quote-left" style={{ color: background }}></i>
            <h3 style={{ color: background }}>{quote}</h3>
            <p style={{ color: background }}>{author}</p>
            <button onClick={changeCitas} style={{ color: background }}>
                <i className="fas fa-chevron-circle-right"></i>
            </button>                  
        </div>
    )
}

export default QuoteBox
