const path = require("node:path");

// // // PART 1 
// // // --------------------------
// // // Q1:
function logFilePath() {
    console.log({ File: __filename, Dir: __dirname });
}
logFilePath();

// // // --------------------------
// // // q2:

function fileName(filePath) {
    console.log(path.basename(filePath));
}

// مثال:
fileName("C:/Users/HELLO/Desktop/Shahd-Zein_C45Sun&wed_4-7_offline_assignment2_01102470189/main.js");


// // // --------------------------
// // // Q3:
function buildPath(obj) {
    const fullPath = path.format({
        dir: obj.dir,
        name: obj.name,
        ext: obj.ext
    });
    console.log(fullPath);
}

buildPath({ dir: "/folder", name: "app", ext: ".js" });


// // // --------------------------
// // //Q4:
function getExtension(filePath){
    console.log(path.extname(filePath));
}
getExtension("/docs/readme.md");

// // // --------------------------
// // //Q5:
function parseFile(p) {
    console.log({
        Name: path.parse(p).name,
        Ext: path.parse(p).ext
    });
}

parseFile(__filename);

// // // --------------------------
// // //6:
function check(filePath){
    console.log(path.isAbsolute(filePath))
}

check("C:\\Users\\HELLO\\Desktop\\CUsersHELLODesktopShahd-Zein_C45Sun&wed_4-7_offline_assignment2_01102470189\\main.js");

// // // --------------------------
// // // Q7:

function join(){
    console.log(path.join("src", "components", "App.js"));
}

join();


// // // --------------------------
// // // Q8:
function resolve(filePath) {
    console.log(path.resolve(filePath))
}
resolve("main.js");
// // --------------------------
// //Q9:
function joinTwo(){
    console.log(path.join("C:\\Users\\HELLO\\Desktop\\Folder1", "folder2\\file.txt"));
}
joinTwo();

// // // --------------------------
// // // Q10:
const fs = require("node:fs");
const { error } = require("node:console");
function deleteFile(){

const filePath = path.resolve('./data.txt');

fs.unlink(filePath, (err) => {
    if (err) {
        console.log("Error deleting file");
        return;
    }
console.log(`${path.basename(filePath)} is deleted.`);
});
}
deleteFile()
// // // --------------------------
// // //Q11:

function createFolder(){
    const folderPath = path.resolve("./folder");

    try {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log("Success");
    } catch (err) {
        console.log("Error:", err.message);
    }
}

createFolder();
// // // --------------------------
// // //Q12:
    const EventEmitter = require("node:events");

    function startEvent(){
        const emitter = new EventEmitter();

        emitter.on("start", () => {
            console.log("welcome event triggered");
    });
    emitter.emit("start");
}
startEvent();

// // // --------------------------
// // //Q13:
    function loginEvent(){
        const emitter = new EventEmitter();

        emitter.on("login", (username) => {
            console.log(`user logged in: ${username}`);
    });
    emitter.emit("login", "Shahd Zein");
}
loginEvent();

// // // --------------------------
// // //Q14:
function readFile(){
    const content = fs.readFileSync("./notes.txt", "utf-8");
    console.log("the file content =>", content);
}

readFile();
// // // --------------------------
// // //Q15:
    function writeFileAsync(){
        fs.writeFile("./async.txt", "Async Save", (error)=>{
            if (error) {
                console.log("Error writing file:", error);
                return;
            }
            console.log("File saved successfully");
        });
    }
    writeFileAsync();
// // // --------------------------
// // //Q16:
    function checkdirExists(){
        const exist = fs.existsSync("./folder");
        console.log("Directory exists:", exist);
    }
    checkdirExists();
// // // --------------------------
// // //Q17:
const os = require("node:os");

function getosInfo(){
    console.log({
        platform: os.platform(),
        arch: os.arch()
    });
}
getosInfo();