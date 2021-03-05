import {Request, Response} from "express"
import {Coordinates } from './coordinates'
import { Get, Route } from "tsoa";
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

export class geolocationController {

    /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   */
  @Get("/")
  public async getCoordinates(req: Request, res: Response) {
    const query = req.query.q
    try {
        const coordinates = await findCoordinates(query)
        res.send(coordinates)

    } catch (err) {
        res.status(500).send(err.message)
    }
  }
}