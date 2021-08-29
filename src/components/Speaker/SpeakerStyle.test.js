const SpeakerStyle = require("./SpeakerStyle")
// @ponicode
describe("SpeakerStyle.speakerPostition", () => {
    test("0", () => {
        let callFunction = () => {
            SpeakerStyle.speakerPostition({ position: "speakerL" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            SpeakerStyle.speakerPostition({ position: 9 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            SpeakerStyle.speakerPostition({ position: 0.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            SpeakerStyle.speakerPostition({ position: "139.3.227.118" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            SpeakerStyle.speakerPostition({ position: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            SpeakerStyle.speakerPostition(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
