const http = require("http");
const PORT = 3000;

const names = [
  { id: 1, name: "Issac Newton" },
  { id: 2, name: "Nicolaus Copernicus" },
  { id: 3, name: "NIkola Tesla" },
  { id: 4, name: "Albert Einstein" },
];

const server = http.createServer((req, res) => {
  const items = req.url.split("/");

  if (req.method === "POST" && items[1] === "names") {
    req.on("data", (data) => {
      const name = data.toString();
      names.push(JSON.parse(name));
    });

    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "name") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "Felipe Henssler Koetz" }));
  } else if (req.method === "GET" && items[1] === "names") {
    if (items.length === 3) {
      const index = Number(items[2]) - 1;
      res.end(JSON.stringify(names[index]));
    } else {
      res.end(JSON.stringify(names));
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port.`);
});
