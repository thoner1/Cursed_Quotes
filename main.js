cursedQuotes = (noun_1, noun_2, verb_1, verb_2, random) => {

// Created in VS code

/* Cursed Quotes is a function that will take a combination of (2) nouns and (2) verbs and will
randomly insert them into existing inspirational quotes contained in this function.

/* The user can add any combination of nouns and verbs; and will automatically parse a new quote into 
the console.

/* The user can input nothing and the function will output one of the standard quotes already preconfigured.

/* If the user types "random" in the random field, then the function will parse a new quote to the console
scrambled with preconfigured nouns and verbs stored from a separate array within this function. */


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
        if(noun_1 && !noun_2 && !verb_1 && !verb_2) {
            switch(randID) {
                case 0:
                    array.splice(4,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 1:
                    array.splice(4,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 2:
                    array.splice(3,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 3:
                    array.splice(5,1,noun_1);
                    console.log(array.join(' ')); 
                    break;
                case 4:
                    array.splice(5,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 5:
                    array.splice(4,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 6:
                    array.splice(6,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 7:
                    array.splice(0,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 8:
                    array.splice(2,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 9:
                    array.splice(4,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 10:
                    array.splice(6,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 11:
                    array.splice(8,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 12:
                    array.splice(8,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 13:
                    array.splice(0,1,noun_1);
                    console.log(array.join(' '));
                    break;
                case 14:
                    array.splice(4,1,noun_1);
                    console.log(array.join(' '));
                    break;
                default:
                    console.log('Houston we have a problem');
                    break;
            };
/*-- noun_1 and noun_2 are only entered -----*/
        }else if(noun_1 && noun_2 && !verb_1 && !verb_2) {
            switch(randID) {
                case 0:
                    array.splice(4,1,noun_1);
                    array.splice(16,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 1:
                    array.splice(4,1,noun_1);
                    array.splice(12,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 2:
                    array.splice(3,1,noun_1);
                    array.splice(6,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 3:
                    array.splice(5,1,noun_1);
                    array.splice(5,1,noun_2);
                    console.log(array.join(' ')); 
                    break;
                case 4:
                    array.splice(5,1,noun_1);
                    array.splice(8,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 5:
                    array.splice(4,1,noun_1);
                    array.splice(6,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 6:
                    array.splice(6,1,noun_1);
                    array.splice(12,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 7:
                    array.splice(0,1,noun_1);
                    array.splice(6,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 8:
                    array.splice(2,1,noun_1);
                    array.splice(8,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 9:
                    array.splice(4,1,noun_1);
                    array.splice(9,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 10:
                    array.splice(6,1,noun_1);
                    array.splice(6,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 11:
                    array.splice(8,1,noun_1);
                    array.splice(11,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 12:
                    array.splice(8,1,noun_1);
                    array.splice(16,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 13:
                    array.splice(0,1,noun_1);
                    array.splice(14,1,noun_2);
                    console.log(array.join(' '));
                    break;
                case 14:
                    array.splice(4,1,noun_1);
                    array.splice(15,1,noun_2);
                    console.log(array.join(' '));
                    break;
                default:
                    console.log('Houston we have a problem');
                    break;
            }
/*--------------------------------- noun_1 and verb_1 are only entered --*/
        }else if(noun_1 && verb_1 && !noun_2 && !verb_2) {
            switch(randID) {
                case 0:
                    array.splice(4,1,noun_1);
                    array.splice(9,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 1:
                    array.splice(4,1,noun_1);
                    array.splice(3,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 2:
                    array.splice(3,1,noun_1);
                    array.splice(1,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 3:
                    array.splice(5,1,noun_1);
                    array.splice(7,1, verb_1);
                    console.log(array.join(' ')); 
                    break;
                case 4:
                    array.splice(5,1,noun_1);
                    array.splice(8,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 5:
                    array.splice(4,1,noun_1);
                    array.splice(6,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 6:
                    array.splice(6,1,noun_1);
                    array.splice(17,2, verb_1);
                    console.log(array.join(' '));
                    break;
                case 7:
                    array.splice(0,1,noun_1);
                    array.splice(8,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 8:
                    array.splice(2,1,noun_1);
                    array.splice(6,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 9:
                    array.splice(1,1,noun_1);
                    array.splice(2,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 10:
                    array.splice(2,1,noun_1);
                    array.splice(9,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 11:
                    array.splice(8,1,noun_1);
                    array.splice(7,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 12:
                    array.splice(8,1,noun_1);
                    array.splice(15,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 13:
                    array.splice(0,1,noun_1);
                    array.splice(1,1, verb_1);
                    console.log(array.join(' '));
                    break;
                case 14:
                    array.splice(4,1,noun_1);
                    array.splice(9,1, verb_1);
                    console.log(array.join(' '));
                    break;
                default:
                    console.log('Houston we have a problem');
                    break;                
            }

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

cursedQuotes('bananas',null,'run');
