const { setServers } = require("dns");
const http = require("http");

const port = 8081;

const toDOList = ["need to learn", "need to hack"]

// get, post, delete, patch, put
http
    .createServer((req, res) => {
        // res.writeHead(200, { "content-Type": "text/html" });
        // res.write("<h4>hideded</h4>");
        // res.end();
        const { method, url } = req;
        // console.log(method, url);
        // res.end();
        if (url === "/todos") {
            if (method === "GET") {
                res.writeHead(200, { "content-type": "text/html" });
                res.write(toDOList.toString());

            } else if (method === "POST") {
                let body = "";
                req.on('error', (err) => {
                    console.log(err);
                }).on('data', (chunk) => {
                    body += chunk;
                    // console.log(chunk);
                }).on('end', () => {
                    body = JSON.parse(body);
                    let newToDO = toDOList;
                    newToDO.push(body.item);
                    console.log(newToDO);
                    res.writeHead(201);
                });
            } else if (method === "DELETE") {
                let body = '';
                req.on('error', (err) => {
                    console.error(err);
                })
                    .on('data', (chunk) => {
                        body += chunk;
                    })
                    .on('end', () => {
                        body = JSON.parse(body);
                        let deleteItem = body.item;
                        for (let i = 0; i < toDOList.length; i++){
                            if (toDOList[i] === deleteItem) {
                                toDOList.splice(i, 1);
                                break;
                            }
                        }
                        res.writeHead(204);
                })
            }
            else {
                res.writeHead(501);
            }
        } else {
            res.writeHead(404);
        }
        res.end();
    })
    .listen(port, () => {
        console.log(`my node js server start ${port}`);
    });





// ser 
// server side rendered

// url: http://localhost:8081//todos (req)
// server side Data(res)




// const http = require("http");

// const port = 8081;

// const toDOList = ["need to learn", " need to hack"]

// // get, post, delete, patch, put
// http
//     .createServer((req, res) => {
//         // res.writeHead(200, { "content-Type": "text/html" });
//         // res.write("<h4>hideded</h4>");
//         // res.end();
//         const { method, url } = req;
//         // console.log(method, url);
//         // res.end();
//         if (url === "/todos") {
//             if (method === "GET") {
//                 res.writeHead(200,{"content-type":"text/html"});
//                 res.write(toDOList.toString());
                
//             } else if(method==="POST"){
//                 let body = "";
//                 req.on('error', (err) => {
//                     console.log(err);
//                 }).on('data',(chunk) => {
//                     body += chunk;
//                     console.log(chunk);
//                 }).on('end', () => {
//                     body = JSON.parse(body);
//                     console.log("body data ",body);
//                 });
//             }
//             else {
//                 res.writeHead(501);
//             }
//         } else {
//             res.writeHead(404);
//         }
//         res.end();
//     })
//     .listen(port, () => {
//         console.log(`my node js server start ${port}`);
//     });



// const http = require("http");

// const port = 8081;

// const toDOList = ["need to learn", " need to hack"]

// get,post,delete,patch,put
// http
//     .createServer((req, res) => {
//         res.writeHead(200, { "content-Type": "text/html" });
//         res.write("<h4>hideded</h4>");
//         res.end();
//     })
//     .listen(port, () => {
//         console.log(`my node js server start ${port}`);
//     });

