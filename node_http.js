const http = require('http');
//it creates an http object hwich is how the pages on the web communicate 
const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Hello world ');
        res.write("This is our first server");
        res.end();
}
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.write('This is a list of offerings');
        res.write(' at BTHS');
        res.end();
    }
});
server.listen(3000);
console.log("Listening on port 3000 ...");