import {Request, Response} from "express"
import {findCoordinates} from './geoLocationService'


export const getCoordinates = async (req: Request, res: Response) => {
    const query = req.query.q
    const coordinates = await findCoordinates(query)
    res.send(coordinates)
}
