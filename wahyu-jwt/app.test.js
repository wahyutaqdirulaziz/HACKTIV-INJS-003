const request = require("supertest");
const app = require("./app");

data = {
    email: "wahyu@gmail.com",
    password: "wahyu12345"
}



datawrong = {
    email: "wahyu@gmail.com",
    password: "wahyu12346"
}


describe("GET/", () => {
    test("200 OK", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe('GET /', () => {
    test('401', () => {
        return request(app)
            .get('/Home')
            .then((response) => {
                expect(response.statusCode).toBe(401);
            });
    });
});


describe("POST /login", () => {
    it("200 OK Login Success !", (done) => {
        request(app).post('/login').send(data).end(function(err, res) {
            if (err) {
                done(err)
            }
            expect(res.status).toEqual(200);
            expect(typeof res.body).toEqual("object");
            expect(res.body).toHaveProperty("token");
            expect(typeof res.body.token).toEqual("string");
            done()
        })
    });

    it("401 Email & Password Is Not Valid", (done) => {
        request(app).post('/login').send(datawrong).end(function(err, res) {
            if (err) {
                done(err)
            }
            expect(res.status).toEqual(401);
            done()
        })
    })
});