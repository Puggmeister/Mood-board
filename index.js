export function MoodBoard(){

  return(
  <div>
  
  <h1 className="mood-board-heading">Destination Mood Board</h1>
  <div className="mood-board">
  <MoodBoardItem
  color="green"
  image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
  description="Caribbean"
  />

  <MoodBoardItem
  color="red"
  image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
  description="Gawadar Beach"
  />

  <MoodBoardItem
  color="blue"
  image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
  description="Santorini"
  />

  </div>
  </div>)
}


export function MoodBoardItem({color,image,description}){
  return (
    <div className="mood-board-item" style={{backgroundColor: color}}>
    
    <img src={image} className="mood-board-image"/>
    <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}
