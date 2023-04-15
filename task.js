import express from "express";
import { engine } from 'express-handlebars';
const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
const students=[
    {
        id:1,
        name:"areg",
        city:"sibin"

    },
    {
        id:2,
        name:"shaza",
        city:"cairo"

    },
    {
        id:3,
        name:"ahmed",
        city:"sibin"

    }
    ,{
        id:4,
        name:"mohamed",
        city:"tanta"

    }
,{
    id:5,
    name:"ali",
    city:"sibin"

}
]
const studentFunction= (request,response) =>{
response.render('students',{layout:false,students})
}

app.get('/students',studentFunction)

app.listen(5000);