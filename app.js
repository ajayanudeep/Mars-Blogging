const express = require('express')
const path = require('path')

const app =  express()

app.set('view engine','ejs')

app.listen(3000)

app.use(express.static('public'))

app.get('/',(req,res) => {
    blogs = [
        {title:"1st",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",createdAt:"12pm"},
        {title:"2nd",content:"The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",createdAt:"53pm"},
        {title:"1st",content:"Lorem ipsum dolo ",createdAt:"12pm"},
        {title:"1st",content:"Lorem ipsum dolo ",createdAt:"12pm"},

    ]
    res.render('index',{ title: "Home" ,blogs})
})
app.get('/about',(req,res) => {
    res.render('about',{title:"About"})
})
 