import React, {useState} from 'react'

const IngredientList = (props) => {
    const [isAdded, setAdded]  = useState(false);

    let ingredientsAdded = [];

    const handleClick = (e) => {
        // e.stopProppagation()
        setAdded(!isAdded)
        ingredientsAdded.push({list})
        console.log(ingredientsAdded)
    }

    let list = props.ingredients.map((item) =>{
        
        return (
            <ul>
                <li>
                    {item.name}
                    <input type="button" value="add" onClick={() => {handleClick(isAdded)}} />
                </li>
            </ul>
        )
    })

    return (
        <div>
            <h1>These are the ingredients we have: </h1>
            <div>
                {list}
            </div>
        </div>
    )
};

export default IngredientList;