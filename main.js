cursedQuotes = (noun_1, noun_2, verb_1, verb_2) => {
/*------------------------------------------------------------------------ Enter Quotes Here -------------------------------------------------------------------------*/
    const quotes = ['"Ask not what your country can do for you, ask what you can do for your country" - John F. Kennedy', 
//0
    '"For everyone that exalts himself shall be humbled, and everyone that humbles himself shall be exalted" - Jesus Christ',
//1
    '"I prefer dangerous freedom over peaceful slavery" - Thomas Jefferson', '"If it is from the internet, it must be true." - Abraham Lincoln',
//3
    '"Thats one small step for man, one giant leap for mankind" - Neil Armstrong', '"The highest result of education is tolerance" - Helen Keller',
//6
    '"If you want to make your dreams come true, the first thing you have to do is wake up" - J.M. Power', 
//7
    '"Kindness is the language which the deaf can hear and the blind can see" - Mark Twain', '"The greatest pleasure in life is doing what people say you cannot do" - Walter Bagehot',
//9
    '"Wise men speak because they have something to say; fools speak because they have to say something" - Plato', '"The important question is, how many hands have I shaked?" - George W. Bush', 
//11
    '"I know how hard it is to put food on your family" - George W. Bush', '"I have never really wanted to go to Japan. Simply because I dont like eating fish. And I know that is very popular in Africa." - Britney Spears',
//13
    '"Smoking kills. If you are killed, you have lost an important part of your life." - Brooke Shields', '"No. I think gay marriage is something that should be between a man and a woman" - Arnold Schwarzenegger']
//15

/*------------------------------------------------------------------------- Random Selector --------------------------------------------------------------------------*/
    let randID = Math.floor(15*(Math.random()));

/*----------------------------------------------------------------------- User Modified Quote ------------------------------------------------------------------------*/
    if (noun_1 || noun_2 || verb_1 || verb_2) {
        

/*---------------------------------------------------------------------- Random Modified Quote -----------------------------------------------------------------------*/
    } else if (noun_2) {
        console.log('I');

/*-------------------------------------------------------------------------- Standard Quote --------------------------------------------------------------------------*/
    }else {
        console.log(quotes[randID]);
    };
}

cursedQuotes();
