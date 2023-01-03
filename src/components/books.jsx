import React from 'react'
import Card from 'react-bootstrap/Card'


const Books = ({books}) => {
  return (
    <>
    {books.map((item) => {
        let thumbnail =  item.volumeInfo.imageLinks &&
        item.volumeInfo.imageLinks.smallThumbnail;
        return(
            <Card key={books.id} className="mb-2">
					<Card.Body>
						<Card.Title> {books.title}!</Card.Title>
                        <img src= {thumbnail} alt="not found" />
					</Card.Body>
				</Card>

        )
    })}
    </>

  )
}

export default Books