/*------------------------- noun_1 is entered only --*/
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
        default:
            console.log('Houston we have a problem');
            break;
    }
/*-- noun_1 and noun_2 are only entered -----*/
}else if(noun_1 && noun_2 && randID === 0 && !verb_1 && !verb_2) {
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
        default:
            console.log('Houston we have a problem');
            break;
    }
}