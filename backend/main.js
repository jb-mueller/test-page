import WebSocket, { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8765 })

wss.on('connection', function connection(ws) {
    ws.on('message', function message(msg) {
        const data = JSON.parse(msg)
        console.log(data)
    })
})