import {Request, Response} from "express"
import {findCoordinates} from './geoLocationService'


export const getCoordinates = async (req: Request, res: Response) => {
    const query = req.query.q
    try {
        const coordinates = await findCoordinates(query)
        res.send(coordinates)

    } catch (err) {
        res.status(500).send(err.message)
    }
}
