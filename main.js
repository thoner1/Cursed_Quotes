cursedQuotes = (noun_1, noun_2, adjective_1, adjective_2) => {
    const quotes = ['"Ask not what your country can do for you, ask what you can do for your country" - John F. Kennedy']
    let randID = Math.floor(5*(Math.random()))
    console.log(randID);
    if (noun_1 || noun_2 || adjective_1 || adjective_2) {
        console.log(noun_1);
    } else {
        console.log('You need to enter a noun!')
    }
}

cursedQuotes('John');
