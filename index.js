const jsonfile = require('jsonfile');
const moment = require('moment');
const simplegit = require('simple-git');
const random = require('random');
const FILE_PATH = './data.json';

const makeCommit = n => {
    if(n===0) return simplegit().push();
    const x = random.int(0, 54);
    const y = random.int(0, 6);
    const date = moment().subtract(1, 'y').add(1, 'd').add(x,'w').add(y,'d').format();
    const data = {
        date: date
    }
    console.log(date);
    jsonfile.writeFile(FILE_PATH, data, () => {
        // git commit --date=""
        simplegit().add([FILE_PATH]).commit(date, { '--date': date }, makeCommit.bind(this, --n));
    })
}

makeCommit(100)