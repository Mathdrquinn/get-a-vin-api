import { getRandomVin } from '../../data/vins';

export default async function randomVin(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ vin: getRandomVin() }))
}