const RANGES_ENDPOINT = 'https://621a99b3faa12ee450fb7d4a.mockapi.io/api/v1/RangeList';

class RangesApi {
    get = async () => {
      try {
        const resp = await fetch(RANGES_ENDPOINT);
        const data = await resp.json();
        return data;
    } catch(e) {
        console.log('oops, looks like fetchRanges had an issue', e);
    }
}

    put = async (range) => {
        try {
        const resp = await fetch(`${RANGES_ENDPOINT}/${range._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(range)
        });
        return await resp.json();
    } catch(e) {
        console.log('Oops, look like updating ranges had an issue', e);
        }
    }
}

export const rangesApi = new RangesApi();