cursedQuotes = (noun_1, noun_2, verb_1, verb_2, random) => {

/*------------------------------------------------------------------------- Random Selector --------------------------------------------------------------------------*/
let randID = Math.floor(15*(Math.random()));

/*------------------------------------------------------------------------ Enter Quotes Here -------------------------------------------------------------------------*/
    const quotes = [
//0
    ['"Ask', 'not', 'what', 'your', 'country', 'can', 'do', 'for', 'you,', 'ask', 'what', 'you', 'can', 'do', 'for', 'your', 'country"', '-', 'John F. Kennedy'], 

//1
    ['"For', 'everyone', 'that', 'exalts', 'himself', 'shall', 'be', 'humbled,', 'and', 'everyone', 'that', 'humbles', 'himself', 'shall', 'be', 'exalted"', '-', 'Jesus Christ'],

//2
    ['"I', 'prefer', 'dangerous', 'freedom', 'over', 'peaceful', 'slavery"', '-', 'Thomas Jefferson'], 

//3
    ['"If', 'it', 'is', 'from', 'the', 'internet,', 'it', 'must', 'be', 'true."', '-', 'Abraham Lincoln'],

//4
    ['"Thats', 'one', 'small', 'step', 'for', 'man,', 'one', 'giant', 'leap', 'for', 'mankind"', '-', 'Neil Armstrong'], 

//5    
    ['"The', 'highest', 'result', 'of', 'education', 'is', 'tolerance"', '-', 'Helen Keller'],

//6
    ['"If', 'you', 'want', 'to', 'make', 'your', 'dreams', 'come', 'true,', 'the', 'first', 'thing', 'you', 'have', 'to', 'do', 'is', 'wake', 'up"', '-', 'J.M. Power'], 

//7
    ['"Kindness', 'is', 'the', 'language', 'which', 'the', 'deaf', 'can', 'hear', 'and', 'the', 'blind', 'can', 'see"', '-', 'Mark Twain'], 

//8    
    ['"The', 'greatest', 'pleasure', 'in', 'life', 'is', 'doing', 'what', 'people', 'say', 'you', 'cannot', 'do"', '-', 'Walter Bagehot'],

//9
    ['"Wise', 'men', 'speak', 'because', 'they', 'have', 'something', 'to', 'say;', 'fools', 'speak', 'because', 'they', 'have', 'to', 'say', 'something"', '-', 'Plato'], 

//10    
    ['"The', 'important', 'question', 'is,', 'how', 'many', 'hands', 'have', 'I', 'shaked?"', '-', 'George W. Bush'], 

//11
    ['"I', 'know', 'how', 'hard', 'it', 'is', 'to', 'put', 'food', 'on', 'your', 'family"', '-', 'George W. Bush'], 

//12
    ['"I', 'have', 'never', 'really', 'wanted', 'to', 'go', 'to', 'Japan','.', 'Simply', 'because', 'I', 'dont', 'like', 'eating', 'fish.', 'And', 'I', 'know', 'that', 'is', 'very', 'popular', 'in', 'Africa."', '-', 'Britney Spears'],

//13
    ['"Smoking', 'kills.', 'If', 'you', 'are', 'killed,', 'you', 'have', 'lost', 'an', 'important', 'part', 'of', 'your', 'life."', '-', 'Brooke Shields'], 

//14    
    ['"No.', 'I', 'think', 'gay', 'marriage', 'is', 'something', 'that', 'should', 'be', 'between', 'a', 'man', 'and', 'a', 'woman"', '-', 'Arnold Schwarzenegger']]


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
            array.splice(3,1,noun_1);
            console.log(array.join(' '));

//randID === 3
        }else if(noun_1 && randID === 3 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(5,1,noun_1);
            console.log(array.join(' '));

//randID === 4
        }else if(noun_1 && randID === 4 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(5,1,noun_1);
            console.log(array.join(' '));

//randID === 5
        }else if(noun_1 && randID === 5 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 6
        }else if(noun_1 && randID === 6 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(6,1,noun_1);
            console.log(array.join(' '));

//randID === 7
        }else if(noun_1 && randID === 7 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(0,1,noun_1);
            console.log(array.join(' '));

//randID === 8
        }else if(noun_1 && randID === 8 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(2,1,noun_1);
            console.log(array.join(' '));

//randID === 9
        }else if(noun_1 && randID === 9 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//randID === 10
        }else if(noun_1 && randID === 10 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(6,1,noun_1);
            console.log(array.join(' '));

//randID === 11
        }else if(noun_1 && randID === 11 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(8,1,noun_1);
            console.log(array.join(' '));

//randID === 12
        }else if(noun_1 && randID === 12 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(8,1,noun_1);
            console.log(array.join(' '));

//randID === 13
        }else if(noun_1 && randID === 13 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(0,1,noun_1);
            console.log(array.join(' '));

//randID === 14
        }else if(noun_1 && randID === 14 && !noun_2 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            console.log(array.join(' '));

//----------------------------- noun_1 & noun_2 are entered only

//randID === 0
        }else if(noun_1 && noun_2 && randID === 0 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            array.splice(16,1,noun_2)
            console.log(array.join(' '));

//randID === 1
        }else if(noun_1 && noun_2 && randID === 1 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            array.splice(12,1,noun_2)
            console.log(array.join(' '));

//randID === 2
        }else if(noun_1 && noun_2 && randID === 2 && !verb_1 && !verb_2) {
            array.splice(3,1,noun_1);
            array.splice(6,1,noun_2)
            console.log(array.join(' '));

//randID === 3
        }else if(noun_1 && noun_2 && randID === 3 && !verb_1 && !verb_2) {
            array.splice(1,1,noun_1);
            array.splice(5,1,noun_2)
            console.log(array.join(' '));

//randID === 4
        }else if(noun_1 && noun_2 && randID === 4 && !verb_1 && !verb_2) {
            array.splice(3,1,noun_1);
            array.splice(8,1,noun_2)
            console.log(array.join(' '));

//randID === 5
        }else if(noun_1 && noun_2 && randID === 5 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            array.splice(6,1,noun_2)
            console.log(array.join(' '));

//randID === 6
        }else if(noun_1 && noun_2 && randID === 6 && !verb_1 && !verb_2) {
            array.splice(6,1,noun_1);
            array.splice(12,1,noun_2)
            console.log(array.join(' '));

//randID === 7
        }else if(noun_1 && noun_2 && randID === 7 && !verb_1 && !verb_2) {
            array.splice(0,1,noun_1);
            array.splice(6,1,noun_2)
            console.log(array.join(' '));

//randID === 8
        }else if(noun_1 && noun_2 && randID === 8 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            array.splice(8,1,noun_2)
            console.log(array.join(' '));

//randID === 9
        }else if(noun_1 && noun_2 && randID === 9 && !verb_1 && !verb_2) {
            array.splice(1,1,noun_1);
            array.splice(9,1,noun_2)
            console.log(array.join(' '));

//randID === 10
        }else if(noun_1 && noun_2 && randID === 10 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            array.splice(16,1,noun_2)
            console.log(array.join(' '));

//randID === 11
        }else if(noun_1 && noun_2 && randID === 11 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            array.splice(11,1,noun_2)
            console.log(array.join(' '));

//randID === 12
        }else if(noun_1 && noun_2 && randID === 12 && !verb_1 && !verb_2) {
            array.splice(8,1,noun_1);
            array.splice(16,1,noun_2)
            console.log(array.join(' '));

//randID === 13
        }else if(noun_1 && noun_2 && randID === 13 && !verb_1 && !verb_2) {
            array.splice(0,1,noun_1);
            array.splice(14,1,noun_2)
            console.log(array.join(' '));

//randID === 14
        }else if(noun_1 && noun_2 && randID === 14 && !verb_1 && !verb_2) {
            array.splice(4,1,noun_1);
            array.splice(15,1,noun_2)
            console.log(array.join(' '));
//-------------------------------------------------------------------Only noun_2 is entered
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

cursedQuotes('fat man', 'pizza');
