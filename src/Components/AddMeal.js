import React, { Component } from 'react';
import { TextField, Button } from '@mui/material'

class AddMeal extends Component {
    constructor() {
        super()
        this.state = {
            // idMeal:"",
            strMeal: "",
            strCategory: "",
            strArea: "",
            strInstructions: "",
            strMealThumb:"",
            strTags:"",
            strYoutube:"",
            c:"",
            strIngredient1:"",
            strIngredient2:"",
            strIngredient3:"",
            strIngredient4:"",
            strIngredient5:"",
            strIngredient6:"",
            strIngredient7:"",
            strIngredient8:"",
            strIngredient9:"",
            strIngredient10:"",
            strIngredient11:"",
            strIngredient12:"",
            strMeasure1:"",
            strMeasure2:"",
            strMeasure3:"",
            strMeasure4:"",
            strMeasure5:"",
            strMeasure6:"",
            strMeasure7:"",
            strMeasure8:"",
            strMeasure9:"",
            strMeasure10:"",
            strMeasure11:"",
            strMeasure12:"",

        }
    }

    hello() {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(this.state),

        })
            .then((response) => {
                response.json()
                    .then((a) => {
                        alert("Product Created Successfully")
                    })
            })
    }
    render() {
        return (
            <div className='b1'><br></br><br></br><br></br>
                 {/* <TextField className='b2' label="Product Name" variant="outlined" onChange={(e) => { this.setState({ idMeal: e.target.value }) }}>ID Meal</TextField><br></br><br></br><br></br> */}
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ c: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Name" variant="outlined" onChange={(e) => { this.setState({ strMeal: e.target.value }) }}>Meal Name</TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Brand" variant="outlined" onChange={(e) => { this.setState({ strCategory: e.target.value }) }}>VEG/NON-VEG</TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Price" variant="outlined" onChange={(e) => { this.setState({ strArea: e.target.value }) }}>Origin Place</TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strInstructions: e.target.value }) }}>Instructions</TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMealThumb: e.target.value }) }}>Image of Dish</TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strTags: e.target.value }) }}>Tags</TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strYoutube: e.target.value }) }}>Youtube Video Link</TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient1: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure1: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient2: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure2: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient3: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure3: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient4: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure4: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient5: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure5: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient6: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure6: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient7: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure7: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient8: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure8: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient9: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure9: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient10: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strMeasure10: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient11: e.target.value }) }}></TextField><br></br><br></br><br></br>
                <TextField className='b2' label="Product Origin" variant="outlined" onChange={(e) => { this.setState({ strIngredient12: e.target.value }) }}></TextField><br></br><br></br><br></br>


                <Button className='b2' onClick={() => this.hello()} variant="outlined">Submit</Button>
            </div>
        );
    }
}

export default AddMeal;