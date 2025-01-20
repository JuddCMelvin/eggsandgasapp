// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

//Schema
const postSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    image: { type: String, default: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'  }
})

//Model and Export
const Post = mongoose.model('Post', postSchema)
module.exports = Post

// module.exports = [
//     {
//         "title": "Cracking the Code: Why Egg Prices Are on the Rise",
//         "description": "A deep dive into the reasons behind the fluctuation of egg prices, including factors like supply chain disruptions, feed costs, and global events.",
//         "image": "https://placehold.co/400?text=Egg+Prices"
//     },
//     {
//         "title": "The Incredible, Edible Egg: Exploring Its Nutritional Benefits",
//         "description": "This post highlights the nutritional value of eggs, their role in a healthy diet, and how they compare to other protein sources.",
//         "image": "https://placehold.co/400?text=Egg+Nutrition"
//     },
//     {
//         "title": "From Farm to Table: How Eggs Get to Your Plate",
//         "description": "A behind-the-scenes look at the journey of eggs from the farm to the supermarket and finally to your kitchen table.",
//         "image": "https://placehold.co/400?text=Farm+to+Table"
//     },
//     {
//         "title": "Why Gas Prices Fluctuate and What It Means for You",
//         "description": "An exploration of the factors that influence gas prices, including crude oil costs, seasonal demand, and government regulations.",
//         "image": "https://placehold.co/400?text=Gas+Price+Fluctuation"
//     },
//     {
//         "title": "The Truth About Gas Prices During Trump's Presidency",
//         "description": "A historical analysis of gas price trends during Trump's presidency, comparing them to previous and subsequent administrations.",
//         "image": "https://placehold.co/400?text=Gas+Prices+Trump"
//     },
//     {
//         "title": "10 Tips to Save Money at the Pump",
//         "description": "Practical tips and tricks to maximize fuel efficiency and reduce spending on gas, including car maintenance and driving habits.",
//         "image": "https://placehold.co/400?text=Save+Money+Gas"
//     }
// ]
