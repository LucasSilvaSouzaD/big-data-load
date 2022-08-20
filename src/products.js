// curl localhost:3000/cart?product="Arroz"

import { createServer } from 'http'
import { parse } from 'url'
import { randomUUID } from 'crypto'

const PORT = 3000

async function handler( request, response ) {
    if (!(request.method === 'GET' && request.url.includes('products'))) return response.end('hey!')

    const { query: { product }} = parse(request.url, true)

    const result = {
        id: randomUUID(),
        product: product
    }
    
    return response.end(JSON.stringify(result))
    
}

createServer(handler)
    .listen(PORT, () => console.log("products API is running at " + PORT))