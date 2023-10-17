exports.seed = function(knex) {
    return knex('jokes').truncate()
    .then(function (){
        return knex('jokes').insert([
            {joke: "what did the guy say to the other guy", punchline: "woah, its another guy"},
            {joke: "what did the girl say to the other girl", punchline: "woah, its another girl"},
            {joke: "what did the boy say to the other guy", punchline: "woah, its another boy"},
            {joke: "what did the chicken say to the other chicken", punchline: "nothing, chickens cant talk"},
            {joke: "want to hear a corny joke", punchline: "cant think of a corn pun"},
            {joke: "im out of jokes", punchline: "im serious"},
        ])
    })
}