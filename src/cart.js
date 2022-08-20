// curl -X POST "localhost:4000/cart" --data '{"id": "123"}'

import { createServer } from 'http'

const PORT = 4000

async function handler( request, response ) {
    if (!(request.method === 'POST' && request.url.includes('cart'))) return response.end('hey!')

    for await (const item of request) {
        const result = JSON.parse(item)
        
        console.log('received', result)

        return response.end(`process succeeded for ${result.id}`)
    }
}

createServer(handler)
    .listen(PORT, () => console.log("products API is running at " + PORT))