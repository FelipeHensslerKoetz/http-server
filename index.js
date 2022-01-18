const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/name") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "Felipe Henssler Koetz" }));
  } else if (req.url === "/names") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li> Hello Felipe </li>");
    res.write("<li> Hello Felipe 2 </li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port.`);
});
