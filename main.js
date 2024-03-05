cursedQuotes = (noun_1, noun_2, verb_1, verb_2) => {

/*------------------------------------------------------------------------- Random Selector --------------------------------------------------------------------------*/
let randID = 1; //Math.floor(15*(Math.random()));

/*------------------------------------------------------------------------ Enter Quotes Here -------------------------------------------------------------------------*/
    const quotes = [['"Ask', 'not', 'what', 'your', 'country', 'can', 'do', 'for', 'you,', 'ask', 'what', 'you', 'can', 'do', 'for', 'your', 'country"', '-', 'John F. Kennedy'], 
//0
    ['"For', 'everyone', 'that', 'exalts', 'himself', 'shall', 'be', 'humbled,', 'and', 'everyone', 'that', 'humbles', 'himself', 'shall', 'be', 'exalted"', '-', 'Jesus Christ'],
//1
    ['"I', 'prefer', 'dangerous', 'freedom', 'over', 'peaceful', 'slavery"', '-', 'Thomas Jefferson'], ['"If', 'it', 'is', 'from', 'the', 'internet,', 'it', 'must', 'be', 'true."', '-', 'Abraham Lincoln'],
//3
    ['"Thats one small step for man, one giant leap for mankind" - Neil Armstrong'], '"The highest result of education is tolerance" - Helen Keller',
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

let array = quotes[randID];

/*------------------------------------------------------------- Checks if user entered in a noun or verb -------------------------------------------------------------*/
    if (noun_1 || noun_2 || verb_1 || verb_2) {

//------------- Only noun_1 is entered 
//randID === 0
        if(noun_1 && randID === 0 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 1
        }else if(noun_1 && randID === 1 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 2
        }else if(noun_1 && randID === 2 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 3
        }else if(noun_1 && randID === 3 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 4
        }else if(noun_1 && randID === 4 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 5
        }else if(noun_1 && randID === 5 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 6
        }else if(noun_1 && randID === 1 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 7
        }else if(noun_1 && randID === 1 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 8
        }else if(noun_1 && randID === 0 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 9
        }else if(noun_1 && randID === 1 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 10
        }else if(noun_1 && randID === 1 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 11
        }else if(noun_1 && randID === 0 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 12
        }else if(noun_1 && randID === 1 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 13
}else if(noun_1 && randID === 1 && !noun_2 && !verb_1 && !verb_2) {
    array.splice(4,1,noun_1);
    console.log(array.join(' '));

//randID === 14
}else if(noun_1 && randID === 0 && !noun_2 && !verb_1 && !verb_2) {
    array.splice(4,1,noun_1);
    console.log(array.join(' '));

//randID === 15
}else if(noun_1 && randID === 1 && !noun_2 && !verb_1 && !verb_2) {
    array.splice(4,1,noun_1);
    console.log(array.join(' '));

//Only noun_2 is entered
        }else if(noun_2 && !noun_1 && !verb_1 && !verb_2) {
            console.log(noun_2)

//Only verb_1 is entered
        }else if(verb_1 && !noun_1 && !noun_2 && !verb_2) {
            console.log(verb_1)

//Only verb_2 is entered 
        }else if(verb_2 && !noun_1 && !noun_2 && !verb_1 && !verb_2) {
            console.log(verb_2)
        }
/*---------------------------------------------------------------------- Random Modified Quote -----------------------------------------------------------------------*/
    }else if (noun_2) {
        console.log('I');

/*-------------------------------------------------------------------------- Standard Quote --------------------------------------------------------------------------*/
    }else {
        console.log(array);
    };
}

cursedQuotes('Pizza');
