import app from "../src/app.js"
import http from "http"
import request from "supertest"

let server
describe('User Signup', () => {

    before((done) => {
        server = http.createServer(app).listen(3000, done)
    })

    it('User should not be able to signup if name is more than 15', (done) => {
        request(server)
            .post('/users')
            .send({ 'name': 'Abhijeet Balasaheb Gawade' })
            .expect(400)
            .end((err, res) => {
                console.log(err)
                if (err) return done(err)
                done()
            })
    })

    it('User should  be able to signup if name is less than 15', (done) => {
        request(server)
            .post('/users')
            .send({ 'name': 'Abhijeet Gawade' })
            .expect(200)
            .end((err, res) => {
                console.log(err)
                if (err) return done(err)
                done()
            })
    })

    it('User should  not be able to signup if profession is student and id card is missing', (done) => {
        request(server)
            .post('/users')
            .send({ 'name': 'Abhijeet Gawade', 'profession': 'Student' })
            .expect(400)
            .end((err, res) => {
                console.log(err)
                if (err) return done(err)
                done()
            })
    })

    it('User should  able to signup if profession is student and id card is not missing', (done) => {
        request(server)
            .post('/users')
            .send({ 'name': 'Abhijeet Gawade', 'profession': 'Student', 'Id': 'A1234' })
            .expect(200)
            .end((err, res) => {
                console.log(err)
                if (err) return done(err)
                done()
            })
    })



    after((done) => {
        server.close(done)
    })

}
)