jest.setTimeout(30000);
const rp = require('request-promise'); // http library to create the http call
const { startSlsOffline, stopSlsOffline } = require('./testUtils/slsUtils'); 
// utililty to start and stop the serverless offline plugin.

const domain = 'http://localhost:3000';

const ObjectA = {
    "data": {
        "estado": "Quer\ufffdtaro",
        "municipio": "San Juan del R\ufffdo",
        "colonias": [
            {
                "nombre": "Centro",
                "tipo": "Colonia"
            }
        ]
    },
    "err": null
}

const ObjectB = {
    "data": {
        "estado": "",
        "municipio": "",
        "colonias": []
    },
    "err": "not result for 768000"
}

beforeAll(async () => {
    await startSlsOffline().catch(e => {
      console.error(e);
    });
  });
  
afterAll(() => {
    stopSlsOffline();
});

describe('Run all operations', () => {
    it('Probamos el get con un CP valido', async () => {      
        try {
            const res = await rp.get(`${domain}/postales/76800`);
            expect(res).toBeDefined();
            const resources = JSON.parse(res);
            expect(typeof resources).toBe('object');
            expect(resources).toStrictEqual(ObjectA);
        } catch (error) {
            throw error;
        }
    });

    it('Probamos el get con un CP invalido', async () => {      
        try {
            const res = await rp.get(`${domain}/postales/768000`);
            expect(res).toBeDefined();
            const resources = JSON.parse(res);
            expect(typeof resources).toBe('object');
            expect(resources).toStrictEqual(ObjectB);
        } catch (error) {
            throw error;
        }
    });
});