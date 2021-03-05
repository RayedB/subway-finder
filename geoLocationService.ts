import axios from 'axios'

export const findCoordinates = async (query) => {
    const request = await axios.get(`https://data.ratp.fr/api/records/1.0/search/?dataset=positions-geographiques-des-stations-du-reseau-ratp&q=${query}&facet=stop_desc`)
    const ratpResponse = request.data
    const coordinates = ratpResponse.records.map(result => {
        return {
            gps: result.fields.stop_coordinates,
            name: result.fields.stop_name,
            description: result.fields.stop_desc,
            id: result.fields.stop_id
        }
    })

    return coordinates
}

